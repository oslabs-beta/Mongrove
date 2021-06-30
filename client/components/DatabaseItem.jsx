import React from 'react';



const DatabaseItem = (props) => {
    //return a single DatabaseItem to display in DatabasePanel; name, key, ID are passed in as props from DatabasePanel
    return (
        <div className="dbItem" className="items">
            <span className="dbNamePanel" className="itemName">
               <p>{props.dbName}</p> 
            </span>
        </div>
    
    )
}

export default DatabaseItem;