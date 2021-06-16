const faker = require('faker');
const mongoose = require('mongoose');

// const model = require(`../models/schemaName`);

function generateTestDatabase(schema, numberOfDocuments) {

  const schemaObj = getFieldNameAndDataTypes(schema);

  // Declare an array to store the test data
  const data = [];
  // Iterate through schemaObj
  for (let i = 0; i < numberOfDocuments; i++) {
    const document = {};
    for (const variableName in schemaObj) {
      let type = schemaObj[variableName];
      switch(type) {
        case 'String' :
          document[variableName] = faker.lorem.word();
          break;
        
        case 'Number' :
          document[variableName] = faker.datatype.number();
          break;
        
        case 'Date' :
          document[variableName] = faker.datatype.datetime();
          break;
          
        case 'Boolean' :
          document[variableName] = faker.datatype.boolean();
          break;
            
        case 'Array' :
          document[variableName] = [];
          while(document[variableName].length < 50) {
            document[variableName].push(faker.lorem.word());
          }
          break;
              
        case 'Decimal128' :
          document[variableName] = faker.datatype.float();
          break;
      
        default: 
        throw new Error('Data type is currently not handled');
      }
    }
    // Push document object into data array
    data.push(document);
  }

  return data;
}

function getFieldNameAndDataTypes (string) {
  const schemaArray = string.trim().slice(1, -1).trim().split(',');
  const result = {};
  for (let i = 0 ; i < schemaArray.length; i++) {
    let curElement = schemaArray[i].trim();
    let split = curElement.split(':');
    result[split[0].trim()] = split[1].trim();
    }
  return result;
}

module.exports = generateTestDatabase;
