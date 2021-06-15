import React from 'react';

const SchemaItem = (props) => {
    // set initial state and respective values
    const {

    } = props;

    return (
        <div className="schemaItem">
            <span className="schemaNamePanel"> 
                {props.id + 1}. {props.schemaName}
            </span>
        
        </div>

    )
}

export default SchemaItem;