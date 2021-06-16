import React, { useState }  from 'react';
import Navbar from '../components/Navbar.jsx';
import SchemaPanel from '../components/SchemaPanel.jsx';
import SchemaMainArea from './SchemaMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
import DatabaseItem from '../components/DatabaseItem.jsx';

//Navbar component

//SchemaPanel component

const LandingPage = (props) => {
    
   //set initial state
   
   const [testDatabasesList, setTestDatabasesList] = useState([])
        
   //functions for setting schema area inputs to state
   const handleSaveSchema = () => {
    //when clicked, should add new schema to state and add new schemaItem component to schemaPanel
   }
    
   
   //functions for setting testDBgenArea inputs to state
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
        <div id="landingPage">
            <p>Landing page component rendering</p>
            <Navbar />
            <SchemaPanel />
            <SchemaMainArea 
                handleSaveSchema={handleSaveSchema} 
                handleGenerateTestDatabase={handleGenerateTestDatabase}        
            />
            <DatabasePanel 
            testDatabasesList={testDatabasesList}
            />
        </div>
    )
}


export default LandingPage;