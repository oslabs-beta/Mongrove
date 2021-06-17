const { PerformanceObserver, performance } = require('perf_hooks');
const generateTestDatabase = require('./generateTestDatabase');

async function runQuery(query, schemaName, schema, numberOfDocuments) {
  
  const model = await require(`../models/${schemaName}`);

  // Call function to generate test database with dummy data
  const data = generateTestDatabase(schema, numberOfDocuments);
  
  model.insertMany(data, function (err) {
    if (err) return console.log('Error: ', err);
    console.log('Data added!');
  });

  const time1 = performance.now();

  try {
    await eval('model.' + query);
  } catch (err) {
    console.log('Error in runQuery: ', err);
  }
  const time2 = performance.now();

  const responseTime = time2 - time1;

  try {
    await model.deleteMany({});
  } catch (err) {
    console.log('Error in deleting database', err);
  }
  console.log('response time: ', responseTime);
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