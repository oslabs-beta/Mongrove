import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import QueryPage from './pages/QueryPage.jsx';
import './stylesheets/styles.css';
import { ipcRenderer } from "electron";

function validateSchema(schema) {
  const supportedTypes = {
    String: true,
    Number: true,
    Boolean: true,
    Date: true,
    Array: true,
    Decimal128: true
  }

  schema = schema.trim();
  if (schema[0] !== '{' || schema[schema.length - 1] !== '}') return false;
  schema = schema.slice(1, -1);
  let pairs = schema.split(",");

  for (let i = 0; i < pairs.length; i++) {
    if (!(/^[a-zA-Z:\s]*$/).test(pairs[i])) return false;
    let curPair = pairs[i].split(":");
    if (curPair.length !== 2) return false;
    for (let j = 0; j < curPair.length; j++) {
      let curWord = curPair[j].trim();
      if (j === 1 && !supportedTypes.hasOwnProperty(curWord)) return false;
      if ((!(/^[a-zA-Z]*$/).test(curWord))) return false;
    }
  }
  return true;
}

const App = () => {
  // USING STATE TO HANDLE AND PERSIST DATA
  // from schema creation area
  const [schemaList, setSchemaList] = useState([]);
  // from test db generation area
  const [testDatabasesList, setTestDatabasesList] = useState([]);
  // from query area
  const [testQueriesList, setTestQueriesList] = useState([]);


  // Handling functionality for 'SAVE SCHEMA' button:
  // when clicked, should add new schema to state and add new schemaItem component to schemaPanel
  function handleSaveSchema(schemaName, schemaValue) {
    const newSchemaList = [...schemaList];
    // ERROR HANDLING
    if (validateSchema(schemaValue)) {
      newSchemaList.push({
        name: schemaName,
        value: schemaValue
      })
      setSchemaList(newSchemaList);
    } else {
      alert("Invalid schema: Enter a valid schema");
    }
    console.log('schemaName', schemaName, 'schemaValue', schemaValue);

  }

  // Handling functionality for 'CONFIGURE TEST DATABASE' button:
  // when clicked, add all 3 inputs to state and add a new dbItem to dbPanel
  async function handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows) {
    // Add schema to the database list
    let schema = '';
    console.log('selectedSchema: ', selectedSchema);
    
    schemaList.forEach(element => {
      if (element.name === selectedSchema) {
        schema = element.value;
      }
    })

    let data = await ipcRenderer.invoke('generate-test-data', schema, numberOfRows);

    const newList = [...testDatabasesList];
    newList.push({
      name: testDBname, 
      schemaName: selectedSchema, 
      schema: schema,
      rows: numberOfRows,
      data: data
    });

    setTestDatabasesList(newList);
      //use update dbName to create a new dbItem component and and it to the db panel
    // backend: all inputs get sent to backend (IPC renderer --> main?)
  }

  // Handle functionality of 'RUN QUERY' button:
  const handleRunQuery = async (selectedDB, testQueryName, testQuery) => {

    const newQueriesList = [];
    testQueriesList.forEach(el => {
      if (testQueryName !== el.queryName) newQueriesList.push(el);
    })

    //when runQuery button is clicked, turn the inputted values into an obj and update list in state
    let schemaName;
    let schema;
    let numberOfDocuments;
    let dbName;
    let data;
  
    testDatabasesList.forEach(element => {
      if (element.name === selectedDB) {
        schemaName = element.schemaName;
        schema = element.schema;
        numberOfDocuments = element.rows;
        dbName = element.name;
        data = element.data;
      }
    })
    
    console.log(testQuery, schemaName, schema, numberOfDocuments, dbName)

    try{
      let result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments, dbName, data);
      result = result.toFixed(2);
      console.log(result);
      newQueriesList.push({
        queryName: testQueryName, 
        queryValue: testQuery, 
        time: result,
        activeStatus: true,
        schemaName: schemaName,
        schemaValue: schema,
        dbName: dbName,
        numOfDocs: numberOfDocuments
      });
      setTestQueriesList(newQueriesList);
    } catch (err) {
      console.log("error", err)
      alert("Invalid query: Verify query", err);
    }
  };

// Handle functionality for handleActivateQuery
// When user clicks on a queryItem in the queryPanel, make its activeStatus property the opposite boolean ofits current value and toggle display of its corresponding resultsItem in the resultsArea
const handleActivateQuery = (queryKey, status) => {
  console.log('handleActivateQuery clicked');
  console.log('queryKey', queryKey);
  console.log('status', status);
  // create a new array of query objects which is identical to the current state, except with the target object updated, then replace testQueriesList in state with the new array
  let updatedQueriesList = [];

  for (let i = 0; i < testQueriesList.length; i++) {
    if (i === queryKey) {
      testQueriesList[i].activeStatus = !testQueriesList[i].activeStatus;
      console.log('query INPUT status:', status);
    }
    updatedQueriesList.push(testQueriesList[i]);
  }

  console.log('updated list', updatedQueriesList);
  setTestQueriesList(updatedQueriesList);
}



  return (
    <div>
      {/* React router should first show LandingPage, then switch to QueryPage when  button is clicked */}
      <HashRouter>
        <Switch>
          <Route exact path="/"           
            render={(props) => 
              <LandingPage 
                testDatabasesList={testDatabasesList}
                handleGenerateTestDatabase={handleGenerateTestDatabase}
                schemaList={schemaList}
                handleSaveSchema={handleSaveSchema}
              />
            }
          />
          <Route exact path="/queryPage"  
            render={(props) => 
              <QueryPage 
                testDatabasesList={testDatabasesList}
                testQueriesList={testQueriesList}
                handleRunQuery={handleRunQuery}
                handleActivateQuery={handleActivateQuery}
              />
            }
          />
        </Switch>               
      </HashRouter>
    </div>
  );
};

ReactDOM.render( <App />, document.getElementById('app'));

