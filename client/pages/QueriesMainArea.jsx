import React from 'react';
import QueryArea from './QueryArea.jsx';
import ResultsArea from './ResultsArea.jsx';

const QueriesMainArea = () => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
    return (
        <div id="queriesMainArea" className="mainAreaComponents">
            <QueryArea />
            {/* <ResultsArea /> */}
        </div>
    );
};

export default QueriesMainArea;