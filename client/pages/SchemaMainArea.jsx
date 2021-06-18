import React from 'react';
import SchemaArea from './SchemaArea.jsx';
import TestDBGenArea from './TestDBGenArea.jsx';


const SchemaMainArea = (props) => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
    return (
        <div id="mainArea" className="mainAreaContainers">
            <SchemaArea {...props} />
            <TestDBGenArea {...props}/>
        </div>
    );
};

export default SchemaMainArea;