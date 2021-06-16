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
			<div id="databasePanel">
					<h2>TEST DATABASES</h2>

					<div id="databasesList">
					{databaseItemsList}
					</div>
			
			</div>
	)
}

export default DatabasePanel;