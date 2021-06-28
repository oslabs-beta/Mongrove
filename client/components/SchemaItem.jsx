import React from 'react';

const SchemaItem = (props) => {
    // set initial state and respective values
 
    return (
        <div className="schemaItem" className="items">
            <span className="schemaNamePanel" className="itemName"> 
                <p>{props.schemaName}</p>
            </span>
        
        </div>

    )
}

export default SchemaItem;