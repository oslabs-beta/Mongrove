import React from 'react';



const DatabaseItem = (props) => {
    //return a single databaseitem; name, key, ID are passed in as props from DatabasePanel
    return (
        <div>
            {/* name of database appears */}
            {/* when clicked, appearance changes to active and that database's queries results show in query panel */}
            <span className="dbItem">
               <p>{props.dbName}</p> 
            </span>
        </div>
    
    )
}

export default DatabaseItem;