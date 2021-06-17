import React from 'react';


const QueryItem = (props) => {
  
 return (
        <div>
            {/* name of database appears */}
            {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
            <span className="queryItem">
               <p>{props.queryName}</p> 
            </span>
        </div>
    
    )

 
}


export default QueryItem;