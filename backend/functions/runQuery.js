const { PerformanceObserver, performance } = require('perf_hooks');
const generateTestDatabase = require('./generateTestDatabase');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


async function runQuery(query, schemaName, schema, numberOfDocuments, databaseName) {

  const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  console.log('Hello!')
  // const model = require(`../models/${schemaName}`);
  // Call function to generate test database with dummy data
  // await mongoose.connect('mongodb://mongo:27017/mydatabase', {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // dbName: databaseName
  // })

  const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://mongo:27017/test", options).then(()=>{
      console.log('MongoDB is connected')
    }).catch(err=>{
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
      setTimeout(connectWithRetry, 5000)
    })
  }
  
  await connectWithRetry();

  const testSchema = eval(`new Schema(${schema})`);

  let model;
  try {
    if (mongoose.model(`${schemaName}`)) model = mongoose.model(`${schemaName}`);
  } catch (err) {
    model = mongoose.model(schemaName, testSchema, schemaName);
  }

  const data = generateTestDatabase(schema, numberOfDocuments);
  
  try{
    await model.insertMany(data),
    console.log('Data added!');
  } catch (err) {
    console.log('Error in inserting data', err);
  }
  
  const time1 = performance.now();

  try {
    await eval('model.' + query);
  } catch (err) {
    console.log('Error in runQuery: ', err);
  }
  const time2 = performance.now();

  const responseTime = time2 - time1;

  try {
    await model.deleteMany({}).then(data => {
      console.log("deleted items", data);

    });
  } catch (err) {
    console.log('Error in deleting database', err);
  }
  console.log('response time: ', responseTime);
  mongoose.connection.close();
  return responseTime;
}

// const schema = `{
//   name: String,
//   rotation_period: Number,
//   orbital_period: Number,
//   diameter: Number,
//   climate: String,
//   gravity: String,
//   terrain: String,
//   surface_water: String,
//   population: Number
// }`;

// runQuery('find({})', 'schemaName', schema, 5);

module.exports = runQuery;