import React, {useState} from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import QueriesMainArea from './QueriesMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
// import { ipcRenderer } from 'electron';

// eventually add a graphs/visualization component

const QueryPage = (props) => {
//create hook to hold/update list of inputted queries as objects
const [testQueriesList, setTestQueriesList] = useState([]);
const [activeStatus, setActiveStatus] = useState(false);


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
  // console.log(testQuery, schemaName, schema, numberOfDocuments)
  // const result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments)
  
  const newQueriesList = [];
  newQueriesList.push(...testQueriesList, {name:testQueryName, query:testQuery, time:2});
  setTestQueriesList(newQueriesList);
  
  //actually run query and store results
  // console.log('testQueriesList', testQueriesList)
  };
  
  //function to activate/deactivate queryItems; active queryItems display their corresponding resultsItems in the resultsArea
  const handleActivateQuery = () => {
    //if queryItem's current state is true, set it to false; or if false, set to true
    setActiveStatus(!activeStatus);
    console.log('activeStatus', activeStatus)
    //  let currentActiveStatus = false;
    // if (props.activeStatus === undefined) {
    //     currentActiveStatus = false;
    // } else if (props.activeStatus === false){
    //     currentActiveStatus = false;
    // } else {
    //     currentActiveStatus = true};
    // let stringCurrentActiveStatus = currentActiveStatus.toString()
    // console.log('stringCurrentActiveStatus', currentActiveStatus)  

  }

  // const handleActivateQuery2 = () => {
    //if array of active queries does not contain queryItem, add it
    //if the array of active queries does contain queryItem, remove it
    //for all queryItems in array, change classname to active
    // }

  return (
    <div id="queryPage">
      <Navbar />
      <div className="queryMainArea">
          <QueriesPanel 
            testQueriesList={testQueriesList}
            handleActivateQuery={handleActivateQuery}
            activeStatus={activeStatus}
          />
          <QueriesMainArea 
            {...props} 
            handleRunQuery={handleRunQuery}
            //pass in state of all active queries
          />
          {/* <DatabasePanel /> */}
          <DatabasePanel 
            testDatabasesList={props.testDatabasesList}
            />
      </div>
    </div>
  );
}


export default QueryPage;