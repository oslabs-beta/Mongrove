import React from 'react';

const SchemaArea = () => {

    return (
        <div id="schemaArea" className="mainAreaComponents">
            {/* enter schema name field */}
            <h2>SchemaArea component rendering</h2>
            <label htmlFor="schemaName">Enter Schema Name</label>
            <input type="text" id="schemaName" name="schemaName"/>
            

            {/* schema input field */}
            <label htmlFor="schemaField">Schema Input Field</label>
            <input type="text" id="schemaField" name="schemaField"/>
           
            {/* save schema button */}
            <input type="button" id="saveSchemaBn" className="mainAreaBn" value="Save Schema" />
        </div>
    );
};

export default SchemaArea;