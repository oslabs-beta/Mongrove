import React, { useState } from 'react';
import Editor from '../components/Editor.jsx';


const SchemaArea = () => {
  const [schema, setSchema] = useState('{field: text}');

    return (
        <div id="schemaArea" className="mainAreaComponents">
            {/* enter schema name field */}
            <h2>SchemaArea component rendering</h2>
            <label htmlFor="schemaName">Enter Schema Name</label>
            <input type="text" id="schemaName" name="schemaName"/>
            

            {/* schema input field */}
            {/* <label htmlFor="schemaField">Schema Input Field</label> */}
            <Editor 
              displayName="Enter Schema here:"
              value={schema}
              onChange={setSchema}
            />
            {/* <input type="text" id="schemaField" name="schemaField"/> */}
           
            {/* save schema button */}
            <button type="button" id="saveSchemaBn" className="mainAreaBn">
                Save Schema
            </button>
        </div>
    );
};

export default SchemaArea;