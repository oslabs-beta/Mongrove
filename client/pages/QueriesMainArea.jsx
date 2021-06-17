import React from 'react';
import QueryArea from './QueryArea.jsx';
import ResultsArea from './ResultsArea.jsx';

const QueriesMainArea = (props) => {
// use useState for handling schema data from SchemaArea component to passdown to dropdown selection in TestDBGenArea    
    return (
        <div id="queriesMainArea" className="mainAreaContainers">
            <QueryArea {...props}/>
            <ResultsArea {...props}/>
        </div>
    );
};

export default QueriesMainArea;