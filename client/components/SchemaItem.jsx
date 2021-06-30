import React from 'react';

//each schema created is displayed as a SchemaItem in the SchemaPanel
const SchemaItem = (props) => {
 
    return (
        <div className="schemaItem" className="items">
            <span className="schemaNamePanel" className="itemName"> 
                <p>{props.schemaName}</p>
            </span>
        
        </div>

    )
}

export default SchemaItem;