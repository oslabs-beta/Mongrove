import React from 'react';


const QueryItem = (props) => {
 return (
  
 return (
        <div>
            {/* name of database appears */}
            {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
            <span className="dbItem">
               <p>{props.queryName}</p> 
            </span>
        </div>
    
    )

 )
}


export default QueryItem;