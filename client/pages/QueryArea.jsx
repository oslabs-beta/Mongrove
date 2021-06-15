import React from 'react';

const QueryArea = () => {

    return (
        <div id="queryArea" className="mainAreaComponents">
        
            {/* select database dropdown */}
            <label for="selectDB">Select Database</label>
            <select id="selectDB" name="selectDB">
                {/* placeholder values for database selection */}
                <option value="sampleDB1">sampleDB1</option>
                <option value="sampleDB2">sampleDB2</option>
                <option value="sampleDB3">sampleDB3</option>
            </select>

            {/* enter query name field */}
            <label for="queryName">Enter Query Name</label>
            <input type="text" id="queryName" name="queryName"/>

            {/* query input field */}
            <label for="queryField">Query Input Field</label>
            <input type="text" id="queryField" name="queryField"/>

        </div>
    );
}

export default QueryArea;