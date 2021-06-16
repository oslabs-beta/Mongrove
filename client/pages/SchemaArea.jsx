import React, { useState } from 'react';
import Editor from '../components/Editor.jsx';


const SchemaArea = (props) => {
  // state handling for schema user inputs
  const [schemaName, setSchemaName] = useState('');
  const [schemaValue, setSchemaValue] = useState('{field: text}');


    return (
        <div id="schemaArea" className="mainAreaComponents">
            <h2>Schema Creation Area</h2>

            {/* enter schema name field */}
            <label htmlFor="schemaName">Enter Schema Name</label>
            <input
              type="text"
              id="schemaName" 
              name="schemaName"
              value={props.schemaName}
              onChange={(e) => {setSchemaName(e.target.value)} }
            />

            {/* schema input field */}
            <Editor 
              displayName="Enter Schema here:"
              value={schemaValue}
              onChange={setSchemaValue}
              // value={props.schemaValue}
              // onChange={(e) => {setSchemaValue(e.target.value)}}
            />
           
            {/* save schema button */}
            <button 
              id="saveSchemaBn" 
              className="mainAreaBn"
              onClick={() => {props.handleSaveSchema(schemaName, schemaValue)}}
            >
              Save Schema
            </button>
        </div>
    );
};

export default SchemaArea;