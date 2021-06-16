import React from 'react';
import { useState } from 'react';







const TestDBGenArea = (props) => { 

    const [testDBname, setTestDBname] = useState('');
    const [selectedSchema, setSelectedSchema] = useState('sampleSchema1');
    const [numberOfRows, setNumberOfRows] = useState(0);

    return (
        <div id="testdbGenArea">
            <h2>TestDBGenArea component rendering</h2>
            <h6>Test Database Generation</h6>
            
            
            <label htmlFor="testdbName">Test Database Name</label>
            <input type="text" id="testdbName" name="testdbName" value={props.testDBname} onChange={(e) => {setTestDBname(e.target.value)}} />

            
            <label htmlFor="selectSchema">Select Schema Name</label>
            <select id="selectSchema" name="selectSchema" value={props.selectedSchema} onChange={(e) => {setSelectedSchema(e.target.value)}} >
            {/* placeholder values for schema selection */}
                <option value="sampleSchema1">sampleSchema1</option>
                <option value="sampleSchema2">sampleSchema2</option>
                <option value="sampleSchema3">sampleSchema3</option>
            </select>

            
            <label htmlFor="rowsNum">Enter number of rows</label>
            <input type="text" id="rowsNum" name="rowsNum" value={props.numberOfRows} onChange={(e) => {setNumberOfRows(e.target.value)}}/>

            
            <button id="genTestdbBn" className="mainAreaBn" onClick={() => {props.handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows)}}>
                Generate Test Database
            </button>
        </div>
    )
};

export default TestDBGenArea;