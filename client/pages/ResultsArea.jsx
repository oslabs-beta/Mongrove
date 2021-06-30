import React from 'react';
import ResultsItem from '../components/ResultsItem.jsx';


const ResultsArea = (props) => {

  // FOR DISPLAYING RESULT ITEMS
  // declare array to store result items to render
  // pass in props required by ResultsItem component
  const resultsItemsList = [];
  for (let i = 0; i < props.testQueriesList.length; i++) {
    if (props.testQueriesList[i].activeStatus) {
      resultsItemsList.push(
        <ResultsItem
          key={i}
          id={i}
          queryName={props.testQueriesList[i].queryName}
          queryRuntime={props.testQueriesList[i].time}
          queryValue={props.testQueriesList[i].queryValue}
          schemaName={props.testQueriesList[i].schemaName}
          schemaValue={props.testQueriesList[i].schemaValue}
          dbName={props.testQueriesList[i].dbName}
          numOfDocs={props.testQueriesList[i].numOfDocs}
        />
      )
    }
  }

  return (

    <div id="resultsArea" className="mainAreaComponents">
      <h2>Results Zone</h2>
      
      {/* Results Legend Area */}
      <div id="resultItemsLegend">
        <div id="legend-1" className="legends">
          <div id="legend-1-colorBlock" className="colorblock"></div>
          <p>   Query Throughput (queries per second) </p>
        </div>
        <div id="legend-2" className="legends">
          <div id="legend-2-colorBlock" className="colorblock"></div>
          <p>   Query Runtime (ms) </p>
        </div>
      </div>

      {/* Area for displaying  all result items */}
      <div id="resultsItemsContainer">
        {resultsItemsList}
      </div>
    </div>
  )
}

export default ResultsArea;