import React from 'react';

const SchemaItem = (props) => {
    // set initial state and respective values
 
    return (
        <div className="schemaItem">
            <span className="schemaNamePanel"> 
                <p>{props.schemaName}</p>
            </span>
        
        </div>

    )
}

export default SchemaItem;