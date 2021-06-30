const faker = require('faker')

function generateTestDatabase (schema, numberOfDocuments) {
  // Invoke getFieldNameAndDataTypes to transform schema from a string into a Javascript object
  const schemaObj = getFieldNameAndDataTypes(schema)

  // Declare an empty array to store the test data
  const data = []
  // Iterate through the schema object and generate dummy test data based on its datatypes
  // The for loop will iterate numberOfDocuments times, generating a document object per iteration
  for (let i = 0; i < numberOfDocuments; i++) {
    const document = {}
    for (const variableName in schemaObj) {
      const type = schemaObj[variableName]
      switch (type) {
        case 'String' :
          document[variableName] = faker.lorem.word()
          break

        case 'Number' :
          document[variableName] = faker.datatype.number()
          break

        case 'Date' :
          document[variableName] = faker.datatype.datetime()
          break

        case 'Boolean' :
          document[variableName] = faker.datatype.boolean()
          break

        case 'Array' :
          document[variableName] = []
          while (document[variableName].length < 50) {
            document[variableName].push(faker.lorem.word())
          }
          break

        case 'Decimal128' :
          document[variableName] = faker.datatype.float()
          break

        default:
          throw new Error('Data type is currently not handled')
      }
    }
    // In each iteration, a dummy test document is created and is pushed into the data array
    data.push(document)
  }
  // Function returns the data array with each document object
  return data
}

// This function takes in the schema as a string a returns a Javascript object
function getFieldNameAndDataTypes (string) {
  // Trims the whitespace and slices the curly braces from the string. Then splits each key/value pair (string form) into an element into schemaArray
  const schemaArray = string.trim().slice(1, -1).trim().split(',')
  // Declare an empty object result
  const result = {}
  for (let i = 0; i < schemaArray.length; i++) {
    // Parses through each element in the schemaArray and creates a Javascript key/value pair in the result object
    const curElement = schemaArray[i].trim()
    const split = curElement.split(':')
    result[split[0].trim()] = split[1].trim()
  }
  // Return the result object
  return result
}

module.exports = { generateTestDatabase, getFieldNameAndDataTypes }
