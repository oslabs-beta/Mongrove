import React, {useState} from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import QueriesMainArea from './QueriesMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
import { ipcRenderer } from 'electron';

// eventually add a graphs/visualization component

const QueryPage = (props) => {
//create hook to hold/update list of inputted queries as objects
const [testQueriesList, setTestQueriesList] = useState([]); 

const handleRunQuery = async (selectedDB, testQueryName, testQuery) => {
  //when runQuery button is clicked, turn the inputted values into an obj and update list in state
  let schemaName;
  let schema;
  let numberOfDocuments;

  props.testDatabasesList.forEach(element => {
    if (element.name === selectedDB) {
      schemaName = element.schemaName;
      schema = element.schema;
      numberOfDocuments = element.rows;
      // console.log('schema in conditional: ', schema);
    }
  }
  )
  console.log(testQuery, schemaName, schema, numberOfDocuments)
  const result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments);
  
  const newQueriesList = [];
  newQueriesList.push(...testQueriesList, {name:testQueryName, query:testQuery, time: result});
  setTestQueriesList(newQueriesList);
  
  //actually run query and store results
  console.log('testQueriesList', testQueriesList)
  };
   
  return (
    <div id="queryPage">
      <Navbar />
      <div className="queryMainArea">
          <QueriesPanel />
          <QueriesMainArea 
            {...props} 
            handleRunQuery={handleRunQuery} />
          {/* <DatabasePanel /> */}
          <DatabasePanel 
            testDatabasesList={props.testDatabasesList}
            />
      </div>
    </div>
  );
}


export default QueryPage;