import React, {useState} from 'react';
import Editor from '../components/Editor.jsx';


const QueryArea = (props) => {
    const [selectedDB, setSelectedDB] = useState('sampleDB1')
    const [queryName, setQueryName] = useState('')
    const [testQuery, setTestQuery] = useState('db.users.find().limit(10)')
    
    return (
        <div id="queryArea" className="mainAreaComponents">
        
            {/* select database dropdown */}
            <label htmlFor="selectDB">Select Database</label>
            <select id="selectDB" name="selectDB">
                {/* placeholder values for database selection */}
                <option value="sampleDB1">sampleDB1</option>
                <option value="sampleDB2">sampleDB2</option>
                <option value="sampleDB3">sampleDB3</option>
            </select>

            {/* enter query name field */}
            <label htmlFor="queryName">Enter Query Name</label>
            <input 
                type="text" 
                id="queryName" 
                name="queryName"/>

            {/* query input field */}
            <Editor 
              displayName="Enter query here:"
              value={testQuery}
              onChange={setTestQuery}
            />

            <button 
                id="runQueryBn" 
                className="mainAreaBn"
                // onClick={props.handleRunQuery(queryName, query)}
                >
            Run Query
            </button>
        </div>
    );
}

export default QueryArea;