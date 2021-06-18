import React, { useState } from 'react';







const TestDBGenArea = (props) => { 

    const [testDBname, setTestDBname] = useState('');
    const [selectedSchema, setSelectedSchema] = useState('');
    const [numberOfRows, setNumberOfRows] = useState(0);

    // for having schemas in schema list appear as a selection option
    const schemaSelection = [<option key={'a'} value={""}>{"Select Schema Below"}</option>];
    for (let i = 0; i < props.schemaList.length; i++) {
        schemaSelection.push(
            <option key={i} value={props.schemaList[i].name}>
                {props.schemaList[i].name}
            </option>
        )
    }

    return (
        <div id="testdbGenArea" className="mainAreaComponents">
            <h2>Test Database Configuration</h2>
            
            
            <label htmlFor="testdbName">Test Database Name</label>
            <input 
                type="text"
                id="testdbName"
                name="testdbName"
                value={testDBname}
                onChange={(e) => {setTestDBname(e.target.value)}}
            />

            
            <label htmlFor="selectSchema">Select Schema Name</label>
            <select 
                id="selectSchema"
                name="selectSchema"
                value={selectedSchema}
                onChange={(e) => {setSelectedSchema(e.target.value)}} 
            >
            {/* placeholder values for schema selection */}
                {schemaSelection}
            </select>

            
            <label htmlFor="rowsNum">Enter Number Of Documents</label>
            <input 
                type="text"
                id="rowsNum"
                name="rowsNum" 
                value={numberOfRows}
                onChange={(e) => {setNumberOfRows(e.target.value)}}
            />

            
            <button 
                id="genTestdbBn"
                className="mainAreaBn"
                onClick={() => {
                    props.handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows)}}
            >
                Configure Test Database
            </button>
        </div>
    )
};

export default TestDBGenArea;