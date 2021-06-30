import React from 'react';


const QueryItem = (props) => {
 
   


  return (
    <div
      onClick={() => {
        return props.handleActivateQuery(props.id, props.activeStatus) 
      }}           
      id="queryItem"
      className={props.activeStatus ? "active" : "inactive"}
    >
      {/* name of database appears */}
      {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
      <span className="itemName">
        <p>{props.testQueryName}</p>
      </span>
    </div>

  )
}


export default QueryItem;