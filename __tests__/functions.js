// import { ExpansionPanelActions } from '@material-ui/core';
import 'regenerator-runtime/runtime'
const {generateTestDatabase, getFieldNameAndDataTypes} = require('../backend/functions/generateTestDatabase');
const runQuery = require('../backend/functions/runQuery');

describe('Functionality Testing', () => {
  
  describe('Generate Test Database - Unit Tests', () => {
    let schema = '{name: String, age: Number, email: String}'
    describe('Generate Schema Object', () => {
      it('generates an object with key value pairs', () => {
        expect(typeof getFieldNameAndDataTypes(schema)).toBe('object');
        expect(getFieldNameAndDataTypes(schema)).toHaveProperty('age', "Number");
        expect(getFieldNameAndDataTypes(schema)).toHaveProperty('email', "String"); 
      })
    })
    describe('Generate Test Database', () => {
      it('returns the correct number of documents', () => {
        expect(generateTestDatabase(schema, 10)).toHaveLength(10);
      })
      
      it('generates data of correct data types', () => {
        generateTestDatabase(schema, 10).forEach(element => {
          expect(element).toMatchSnapshot({
            name: expect.any(String),
            age: expect.any(Number),
            email: expect.any(String)
          })
        })
      })
      it('throws an error on unhandled datatypes', () => {
        const unhandled = '{mixed: Mixed}'
        expect(() => generateTestDatabase(unhandled, 10)).toThrow('Data type is currently not handled');
      })
    })
  })
  
  
  
  describe('Run Query - Unit Tests', () => {
    
    let query, schemaName, schema, numberOfDocuments, databaseName, data;
    beforeEach(() => {
      query = 'find()';
      schemaName = 'mySchema';
      schema = '{name: String, age: Number}';
      numberOfDocuments = 100;
      databaseName = 'myDB';
      data = generateTestDatabase(schema, numberOfDocuments);
    })

    it('Run query returns a number', async () => {
      const result = await runQuery(query, schemaName, schema, numberOfDocuments, databaseName, data);
      expect(typeof result).toBe('number');

    })
    
  })
  
})

