import React, { useState }  from 'react';
import Navbar from '../components/Navbar.jsx';
import SchemaPanel from '../components/SchemaPanel.jsx';
import SchemaMainArea from './SchemaMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';
import DatabaseItem from '../components/DatabaseItem.jsx';

//Navbar component

//SchemaPanel component

const LandingPage = (props) => {
    
   
        
   //functions for setting schema area inputs to state
   const handleSaveSchema = () => {
    //when clicked, should add new schema to state and add new schemaItem component to schemaPanel
   }
    
   
   

    

    return (
        <div id="landingPage">
            <Navbar />
            <SchemaPanel />
            <SchemaMainArea 
                handleSaveSchema={handleSaveSchema} 
                handleGenerateTestDatabase={props.handleGenerateTestDatabase}        
            />
            <DatabasePanel 
                 testDatabasesList={props.testDatabasesList}
                 />
        </div>
    )
}


export default LandingPage;