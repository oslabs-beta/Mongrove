import React, { useState } from 'react';







const TestDBGenArea = (props) => { 

    const [testDBname, setTestDBname] = useState('');
    const [selectedSchema, setSelectedSchema] = useState('sampleSchema1');
    const [numberOfRows, setNumberOfRows] = useState(0);

    // for having schemas in schema list appear as a selection option
    const schemaSelection = [];
    for (let i = 0; i < props.schemaSelection.length; i++) {
        schemaSelection.push(
            <option key={i} value={props.schemaSelection[i].name}>
                {props.schemaSelection[i].name}
            </option>
        )
    }

    return (
        <div id="testdbGenArea" className="mainAreaComponents">
            <h2>Test Database Generation</h2>
            
            
            <label htmlFor="testdbName">Test Database Name</label>
            <input 
                type="text"
                id="testdbName"
                name="testdbName"
                value={props.testDBname}
                onChange={(e) => {setTestDBname(e.target.value)}}
            />

            
            <label htmlFor="selectSchema">Select Schema Name</label>
            <select 
                id="selectSchema"
                name="selectSchema"
                value={props.selectedSchema}
                onChange={(e) => {setSelectedSchema(e.target.value)}} 
            >
            {/* placeholder values for schema selection */}
                {schemaSelection}
            </select>

            
            <label htmlFor="rowsNum">Enter number of rows</label>
            <input 
                type="text"
                id="rowsNum"
                name="rowsNum" 
                value={props.numberOfRows}
                onChange={(e) => {setNumberOfRows(e.target.value)}}
            />

            
            <button 
                id="genTestdbBn"
                className="mainAreaBn"
                onClick={() => {props.handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows)}}
            >
                Generate Test Database
            </button>
        </div>
    )
};

export default TestDBGenArea;