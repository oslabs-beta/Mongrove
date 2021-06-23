const { PerformanceObserver, performance } = require('perf_hooks');
const generateTestDatabase = require('./generateTestDatabase');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


async function runQuery(query, schemaName, schema, numberOfDocuments, databaseName) {

  // const model = require(`../models/${schemaName}`);
  // Call function to generate test database with dummy data
  await mongoose.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: databaseName
  })

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