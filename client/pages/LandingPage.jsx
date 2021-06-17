import React, { useState }  from 'react';
import Navbar from '../components/Navbar.jsx';
import SchemaPanel from '../components/SchemaPanel.jsx';
import SchemaMainArea from './SchemaMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
import DatabaseItem from '../components/DatabaseItem.jsx';

//Navbar component

//SchemaPanel component

const LandingPage = (props) => {
  
    // Put found schema value into a variable
    
    //use update dbName to create a new dbItem component and and it to the db panel
    //backend: all inputs get sent to backend (IPC renderer --> main?)
  

    return (
        <div id="landingPage">
            <Navbar />
            <div className="queryMainArea">
                <SchemaPanel 
                    schemaList={props.schemaList}
                />
                <SchemaMainArea 
                    handleSaveSchema={props.handleSaveSchema} 
                    handleGenerateTestDatabase={props.handleGenerateTestDatabase}   
                    schemaList={props.schemaList} 
                />
                <DatabasePanel 
                    testDatabasesList={props.testDatabasesList}
                    />
            </div>
        </div>
    )
}


export default LandingPage;