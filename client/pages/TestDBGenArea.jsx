import React from 'react';

const TestDBGenArea = () => {

    return (
        <div id="testdbGenArea">
            <h2>TestDBGenArea component rendering</h2>
            <h6>Test Database Generation</h6>

            <label for="testdbName">Test Database Name</label>
            <input type="text" id="testdbName" name="testdbName"/>

            <label for="selectSchema">Select Schema Name</label>
            <select id="selectSchema" name="selectSchema">
            {/* placeholder values for schema selection */}
                <option value="sampleSchema1">sampleSchema1</option>
                <option value="sampleSchema2">sampleSchema2</option>
                <option value="sampleSchema3">sampleSchema3</option>
            </select>

            <label for="rowsNum">Enter number of rows</label>
            <input type="text" id="rowsNum" name="rowsNum"/>

            <input type="button" id="genTestdbBn" className="mainAreaBn">
                Generate Test Database
            </input>
        </div>
    )
};

export default TestDBGenArea;