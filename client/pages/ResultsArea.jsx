import React from 'react';
import ResultsItem from '../components/ResultsItem.jsx';


const ResultsArea = (props) => {

  // declare array to store result items to render
  const resultsItemsList = [];
  for (let i = 0; i < props.testQueriesList.length; i++) {
    resultsItemsList.push(
      <ResultsItem
        key={i}
        id={i}
        queryName={props.testQueriesList[i].name}
        queryRuntime={props.testQueriesList[i].time}
      />
    )
  }

  return (

    <div id="resultsArea" className="mainAreaComponents">
      <h2>Results Area</h2>
      
      <div id="resultItemsLegend">
        <div id="legend-1" className="legends">
          <div id="legend-1-colorBlock" className="colorblock"></div>
          <p>   Query Throughput (per second) </p>
        </div>
        <div id="legend-2" className="legends">
          <div id="legend-2-colorBlock" className="colorblock"></div>
          <p>   Query Runtime (ms) </p>
        </div>
      </div>

      <div id="resultsItemsContainer">
        {resultsItemsList}
        {/* <ResultsItem /> */}
      </div>
    </div>
  )
}

export default ResultsArea;