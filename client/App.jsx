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
   const [testDatabasesList, setTestDatabasesList] = useState([])

   //when GenerateTestDatabase button is clicked, add all 3 inputs to state and add a new dbItem to dbPanel
   function handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows) {
    // e.preventdefault()
        //frontend: 
            const newList = [...testDatabasesList];
            newList.push({
                name:testDBname, 
                schema: selectedSchema, 
                rows: numberOfRows});
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
                        handleGenerateTestDatabase={handleGenerateTestDatabase}/>}/>
                    <Route exact path="/queryPage"  
                        render={(props) => <QueryPage 
                        testDatabasesList={testDatabasesList}/>}/>
                </Switch>
                {/* <DatabasePanel/> */}
               
             </HashRouter>
        </div>
    );
};

ReactDOM.render( <App />, document.getElementById('app'));

