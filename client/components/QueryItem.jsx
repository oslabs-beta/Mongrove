import React from 'react';


const QueryItem = (props) => {
 
   


    return (
        <div
            onClick={() => props.handleActivateQuery(props.key, props.activeStatus)}           
            id="queryItem"
            className={activeStatus ? "active" : "inactive"}
        >
            {/* name of database appears */}
            {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
            <p>
                {props.testQueryName}
            </p> 
        </div>
    
    )

 
}


export default QueryItem;