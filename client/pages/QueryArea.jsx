import React, {useState} from 'react';
import Editor from '../components/Editor.jsx';


const QueryArea = (props) => {
    const [selectedDB, setSelectedDB] = useState('sampleDB1');
    const [testQueryName, setTestQueryName] = useState('');
    const [testQuery, setTestQuery] = useState('find()');
    
    // ERROR HANDLING
    // condition that checks if user has filled out the form completely
    const isEnabled = (selectedDB != "sampleDB1" && testQueryName.length > 0) ? true : false;
    // FOR POPULATING THE SELECTION DROPDOWN
    // create a array to hold the db options to select from dropdown menu
    const dbSelection = [<option key={'a'} value={""}>{"Select Database Below"}</option>];
    props.testDatabasesList.forEach((e, i) => {
        dbSelection.push(
            <option 
                key={i} 
                value={e.name}
            >
            {e.name} 
            </option> )
    });
    

    return (
        <div id="queryArea" className="mainAreaComponents">
            <h2>Query Creation Area</h2>

            {/* select database dropdown */}
            <label htmlFor="selectDB">Select Database</label>
            <select 
                id="selectDB" 
                name="selectDB"
                value={selectedDB}
                onChange={(e)=> {setSelectedDB(e.target.value)}}    
            >
                {/* placeholder values for database selection */}
                {dbSelection}
            </select>
            {/* enter query name field */}
            <label htmlFor="queryName">Enter Query Name</label>
            <input 
                type="text" 
                id="testQueryName" 
                name="testQueryName"
                value={testQueryName}
                onChange={(e)=>setTestQueryName(e.target.value)}
                />

            {/* query input field */}
            <Editor
              displayName="Enter query here:"
              value={testQuery}
              onChange={setTestQuery}
              className="codemirror"
            />

            <button 
                id="runQueryBn" 
                className="mainAreaBn"
                // onClick={() => console.log('runQueryButton clicked')}
                onClick={() => {props.handleRunQuery(selectedDB, testQueryName, testQuery)}}
                disabled={!isEnabled}
            >
            Run Query
            </button>
        </div>
    );
}

export default QueryArea;