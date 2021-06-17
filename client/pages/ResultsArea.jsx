import React from 'react';
import ResultsItem from '../components/ResultsItem.jsx';


const ResultsArea = (props) => {

  // declare array to store result items to render
  // const resultsItemsList = [];
  // for (let i = 0; i < props.queryList.length; i++) {
  //   resultsItemsList.push(
  //     <ResultsItem
  //       key={i}
  //       id={i}
  //       queryName={props.queryList[i].name}
  //     />
  //   )
  // }

  return (

    <div id="resultsArea" className="mainAreaComponents">
      <h2>Results Area</h2>
      
      <div id="resultItemsLegend">
        <div id="legend-1" className="legends">
          <div id="legend-1-colorBlock"></div>
          <p> Query Throughput (amount/ms) </p>
        </div>
        <div id="legend-2" className="legends">
          <div id="legend-2-colorBlock"></div>
          <p> Query Runtime (ms) </p>
        </div>
      </div>

      <div id="resultsItemsContainer">
        {/* {resultsItemsList} */}
      </div>
    </div>
  )
}

export default ResultsArea;