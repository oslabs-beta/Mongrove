import React, { useState } from 'react';
// import DatabaseItem from './DatabaseItem';

const DatabasePanel = () => {
    // use state to populate schemas to display here
    const state = {
        dbNameList: [], 
    }

    const [currentState, setState] = useState(state);


    const dbList = [];
    for (let i = 0; i < currentState.dbNameList.length; i++) {
        dbList.push(
            <DatabaseItem 
                schemaName={currentState.dbNameList[i]}
                key={i}
                id={i}
                currentState={currentState}
            />
        )
    }

    return (
        <div id="dbPanel">
            <h2> DATABASES </h2>


            <div id="dbList">
                {/* {dbList} */}
                databaseItem1
            </div>

        </div>
    )
}

export default DatabasePanel;