import React from 'react';
import QueryItem from './QueryItem.jsx';

const QueriesPanel = (props) => {
        
  //create an array to hold all queryItems to be displayed in QueryPanel
  const queryItemsList = []
  
  for (let i = 0; i < props.testQueriesList.length; i++) {
    queryItemsList.push(<QueryItem 
      key={i} 
      id={i} 
      testQueryName={props.testQueriesList[i].queryName}
      activeStatus={props.testQueriesList[i].activeStatus}
      handleActivateQuery={props.handleActivateQuery}
    />)
  }
  
  return (
    <div className="sidePanel" id="queryPanel">
      <h3> QUERIES </h3>
      <div className="queryItemContainer">
          {queryItemsList}
      </div>  
    </div>
  )
};

export default QueriesPanel;