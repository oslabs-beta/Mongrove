import React, {useState} from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import QueriesMainArea from './QueriesMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
import { ipcRenderer } from 'electron';


const QueryPage = (props) => {
//create hook to hold and update list of inputted queries as objects
// const [testQueriesList, setTestQueriesList] = useState([]);

// const handleRunQuery = async (selectedDB, testQueryName, testQuery) => {
//   //when runQuery button is clicked, turn the inputted values into an obj and update list in state
//   let schemaName;
//   let schema;
//   let numberOfDocuments;

//   props.testDatabasesList.forEach(element => {
//     if (element.name === selectedDB) {
//       schemaName = element.schemaName;
//       schema = element.schema;
//       numberOfDocuments = element.rows;
//     }
//   })
    
//   console.log(testQuery, schemaName, schema, numberOfDocuments)
//   const result = await ipcRenderer.invoke('run-query', testQuery, schemaName, schema, numberOfDocuments)
  
//   const newQueriesList = [];
//   newQueriesList.push(...testQueriesList, {
//     name: testQueryName, 
//     query: testQuery, 
//     time: result,
//     activeStatus: true
//   });
//   setTestQueriesList(newQueriesList);
// };
  
//   //when a queryItem in the queryPanel is clicked, make its activeStatus property the opposite boolean of what it currently is and display their corresponding resultsItems in the resultsArea
//   const handleActivateQuery = (queryKey, status) => {
//     console.log('handleActivateQuery clicked');
//     console.log('query key', queryKey);
//     console.log('status', status);
//     //create a new array of query objects which is identical to the current state, except with the target object updated, then replace testQueriesList in state with the new array
//     let updatedQueriesList = [];

//     for (let i = 0; i < testQueriesList.length; i++) {
//       if (i === queryKey) {
//         console.log('query INPUT status:', status);
//         testQueriesList[i].activeStatus = !testQueriesList[i].activeStatus;
//       }
//       updatedQueriesList.push(testQueriesList[i]);
//     }

//     console.log('updated list', updatedQueriesList);
//     setTestQueriesList(updatedQueriesList);
//   }


  return (
    <div id="queryPage">
      <Navbar />
      <div className="queryMainArea">
          <QueriesPanel 
            // testQueriesList={testQueriesList}
            {...props}
            // activeStatus={activeStatus}
          />
          <QueriesMainArea 
            {...props} 
            // handleRunQuery={handleRunQuery}
            // testQueriesList={testQueriesList}
            //pass in state of all active queries
          />
          <DatabasePanel 
            testDatabasesList={props.testDatabasesList}
            />
      </div>
    </div>
  );
}


export default QueryPage;