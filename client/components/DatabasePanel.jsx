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
	//display all databaseItems in the databasePanel
	return (
		<div id="databasePanel" className="sidePanel">
			<h3>TEST DATABASES</h3>
			<div id="databasesList">
				{databaseItemsList}
			</div>
    	</div>
	)
}

export default DatabasePanel;