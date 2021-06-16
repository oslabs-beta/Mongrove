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
  // for handling data from schema creation area
  const [schemaList, setSchemaList] = useState([]);

  // for handling data from test DB generation area
  const [testDatabasesList, setTestDatabasesList] = useState([]);
        


  //functions for setting schema area inputs to state
     //when clicked, should add new schema to state and add new schemaItem component to schemaPanel
     
  function handleSaveSchema(schemaName, schemaValue) {
    const newSchemaList = [...schemaList];
    newSchemaList.push({
      name: schemaName,
      value: schemaValue
    })
    setSchemaList(newSchemaList);
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

    console.log(newList);
    setTestDatabasesList(newList);
    //use update dbName to create a new dbItem component and and it to the db panel
    //backend: all inputs get sent to backend (IPC renderer --> main?)
  }

  return (
    <div id="landingPage">
      <Navbar />
      <SchemaPanel 
        schemaList={schemaList}
      />
      <SchemaMainArea 
        handleSaveSchema={handleSaveSchema} 
        handleGenerateTestDatabase={handleGenerateTestDatabase}
        schemaSelection={schemaList}        
      />
      <DatabasePanel 
        testDatabasesList={testDatabasesList}
      />
    </div>
  )
}


export default LandingPage;