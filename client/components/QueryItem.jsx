import React from 'react';


const QueryItem = (props) => {
 
   


    return (
        <div className="queryItemPanel">
            {/* name of database appears */}
            {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
            
            <span>
               <p   
                    className={props.activeStatus.toString()}
                    onClick={props.handleActivateQuery}
                         
                >
                    {props.testQueryName}
                </p> 
            </span>
        </div>
    
    )

 
}


export default QueryItem;