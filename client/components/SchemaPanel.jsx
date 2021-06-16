import React, { useState } from 'react';

// import SchemaItem from './SchemaItem';

const SchemaPanel = () => {
    // use state to populate schemas to display here
    const state = {
        schemaNameList: [], 
    }

    const [currentState, setState] = useState(state);


    const schemaList = [];
    for (let i = 0; i < currentState.schemaNameList.length; i++) {
        schemaList.push(
            <SchemaItem 
                schemaName={currentState.schemaNameList[i]}
                key={i}
                id={i}
                currentState={currentState}
            />
        )
    }

    return (
        <div id="schemaPanel" className="panels">
            <h3> SCHEMAS </h3>

            <div id="schemaList">
                {/* {schemaList} */}
                schemaItem1
            </div>

        </div>
    )
}

export default SchemaPanel;