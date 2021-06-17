import React from 'react';

const QueriesPanel = (props) => {
    //create an array to hold all queryItems
    const queryItemsList = []
    
    for (let i=0; i < props.testQueriesList.length; i++){
        queryItemsList.push(<QueryItem key={i} id={i} queryName={props.testQueriesList[i].name}/>)
    }
    return (
        <div>
            {queryItemsList}
        </div>
    )
}

export default QueriesPanel;