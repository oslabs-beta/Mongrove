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
// const [activeStatus, setActiveStatus] = useState(false);


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
    })
    
  console.log(testQuery, schemaName, schema, numberOfDocuments)
  const result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments)
  
  const newQueriesList = [];
  newQueriesList.push(...testQueriesList, {
    name: testQueryName, 
    query: testQuery, 
    time: result,
    activeStatus: true,
    className: "active"
  });
  setTestQueriesList(newQueriesList);
  
  //actually run query and store results
  // console.log('testQueriesList', testQueriesList)
  };
  
  //function to activate/deactivate queryItems; active queryItems display their corresponding resultsItems in the resultsArea
  const handleActivateQuery = (key, activeStatus) => {
    //user clicks
    testQueriesList[key].activeStatus = !activeStatus;

    //create a new array of query objects which is identical to the current state, except with the target object updated
    //then use setState to update testQueriesList
    let newNewQueriesList = testQueriesList.map(query => {
      if (query.key === key) {
        query.activeStatus = !query.activeStatus
      }
    })
    setTestQueriesList(newNewQueriesList)
    //pass in name of query that was clicked
    //iterate over queriesList array of objects
      //for each object, if name=== passed in queryName, change its active status to false & change className to "inactive"
      //now when results area receives queriesList, only show 


    //if current schema object active status is true, convert active Status propery in schema object
    
    console.log('handleActivateQuery clicked');
    //if queryItem's current state is true, set it to false; or if false, set to true
    // setActiveStatus(!activeStatus);
    console.log('activeStatus', activeStatus) 

  }


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
            testQueriesList={testQueriesList}
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