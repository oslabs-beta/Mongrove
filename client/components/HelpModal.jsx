import React from 'react';

//new browser window opens when navbar help button is clicked

const HelpModal = () => {
 return (
     <div>
        <h3>Instructions</h3>
        <h4>To input a schema:</h4>

        <p>Type a schema into the Schema Input Field. 
        Name your schema (Enter Schema Name) for quick referencing
        Click Save Schema to save your schema. You can now generate
        a test database </p>

        <h4>To generate a test database:</h4>

        <p>Enter a Test Database Name for the database you want to generate.
        Choose a schema from the Select Test Schema Name</p>

        <h4>To test queries using test database:</h4>

        <p>Enter a Test Database Name for the database you want to generate.
        Choose a schema from the Select Test Schema Name</p>

     </div>
 )

}

export default HelpModal;