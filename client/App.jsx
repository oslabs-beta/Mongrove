import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import QueryPage from './pages/QueryPage.jsx';
import './stylesheets/styles.css';
import DatabasePanel from './components/DatabasePanel.jsx';
// renderer process
// const { ipcRenderer } = require('electron');

// ipcRenderer.send('anything-asynchronous', 'ping');




//render landing page when app is first opened

const App = () => {
  //set initial state
  // for handling data from schema creation area
  const [schemaList, setSchemaList] = useState([]);

  const [testDatabasesList, setTestDatabasesList] = useState([]);

    //functions for setting schema area inputs to state
     //when clicked, should add new schema to state and add new schemaItem component to schemaPanel
     
  function handleSaveSchema(schemaName, schemaValue) {
    const newSchemaList = [...schemaList];
    newSchemaList.push({
      name: schemaName,
      value: schemaValue
    })
    console.log('schemaName', schemaName, 'schemaValue', schemaValue);
    setSchemaList(newSchemaList);
    console.log(schemaList);
  }

  //when GenerateTestDatabase button is clicked, add all 3 inputs to state and add a new dbItem to dbPanel
  function handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows) {
    // e.preventdefault()
        //frontend: 
            // Add schema to the database list
     let schema = '';
     console.log('selectedSchema: ', selectedSchema);

     schemaList.forEach(element => {
       if (element.name === selectedSchema) {
         schema = element.value;
         console.log('schema in conditional: ', schema);
       }
     })
    const newList = [...testDatabasesList];
    newList.push({
      name: testDBname, 
      schemaName: selectedSchema, 
      schema: schema,
      rows: numberOfRows});

    console.log(newList);

    setTestDatabasesList(newList);
            //use update dbName to create a new dbItem component and and it to the db panel
        //backend: all inputs get sent to backend (IPC renderer --> main?)
  }

    


    return (
        <div>
            {/* <button onClick={() => alert("here")}>Button</button> */}
            {/* react router should first show landing page, then switch when viewchange button is clicked */}
            <HashRouter>
                <Switch>
                    <Route exact path="/"           
                        render={(props) => <LandingPage 
                        testDatabasesList={testDatabasesList}
                        handleGenerateTestDatabase={handleGenerateTestDatabase}
                        schemaList={schemaList}
                        handleSaveSchema={handleSaveSchema}
                        />}
                        />
                    <Route exact path="/queryPage"  
                        render={(props) => <QueryPage 
                        testDatabasesList={testDatabasesList}/>}/>
                </Switch>               
             </HashRouter>
        </div>
    );
};

ReactDOM.render( <App />, document.getElementById('app'));

