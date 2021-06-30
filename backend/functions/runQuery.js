const { PerformanceObserver, performance } = require('perf_hooks');
const mongoose = require('mongoose');
const { Schema } = mongoose;

async function runQuery (query, schemaName, schema, numberOfDocuments, databaseName, data) {
  // Connect to MongoDB using mongoose
  await mongoose.connect('mongodb://localhost:27018', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: databaseName
  });

  // Create new schema
  const testSchema = eval(`new Schema(${schema})`);

  // Create a model using mongoose and the previously created schema
  let model;
  try {
    if (mongoose.model(`${schemaName}`)) model = mongoose.model(`${schemaName}`);
  } catch (err) {
    model = mongoose.model(schemaName, testSchema, schemaName);
  }

  // Insert dummy data data into the database
  try {
    await model.insertMany(data)
  } catch (err) {
    console.log('Error in inserting data', err);
  }

  let time1, time2;

  // Run the query on the test database and get the time to run the query
  try {
    time1 = performance.now();
    await eval(`model.${query}`);
    time2 = performance.now();
  } catch (err) {
    console.log('Error in runQuery: ', err);
    throw new Error('Invalid query');
  }

  const responseTime = time2 - time1;

  // Delete the dummy data after the query is run
  try {
    await model.deleteMany({});
  } catch (err) {
    console.log('Error in deleting database', err);
  }

  // Close the connection to mongoose and return the response time
  mongoose.connection.close();
  return responseTime;
}

module.exports = runQuery;
