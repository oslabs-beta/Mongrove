import React from 'react';
import DatabaseItem from './DatabaseItem.jsx';

const DatabasePanel = (props) => {

	//create an array to hold each created test DB component
	const databaseItemsList = []; 
	for (let i = 0; i < props.testDatabasesList.length; i++) {
		databaseItemsList.push(
			<DatabaseItem 
				key={i}
				id={i}
				dbName={props.testDatabasesList[i].name} 
			/>
		)
	}
	return (
<<<<<<< HEAD
    <div id="databasePanel" className="panels">
      <h3>TEST DATABASES</h3>
||||||| 7cf7af5
			<div id="databasePanel" className="panels">
					<h2>TEST DATABASES</h2>
=======
			<div id="databasePanel" className="sidePanel">
					<h3>TEST DATABASES</h3>
>>>>>>> fd845d6296965c1b820857a960f549b9506f247f

      <div id="databasesList">
        {databaseItemsList}
      </div>
    
    </div>
	)
}

export default DatabasePanel;