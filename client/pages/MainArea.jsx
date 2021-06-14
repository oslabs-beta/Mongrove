import React from 'react';
import SchemaArea from './schemaArea';
import TestDBGenArea from './TestDBGenArea';


const MainArea = () => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
    return (
        <div id="mainArea" className="mainAreaComponents">
            <SchemaArea />
            <TestDBGenArea />
        </div>
    );
};

export default MainArea;