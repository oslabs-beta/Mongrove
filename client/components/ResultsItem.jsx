import React from 'react';

const ResultsItem = (props) => {

  return (
    <div className="resultItem">
      <h3 className="result-queryName">
        {/* {props.id + 1}. {props.queryName} */}
        firstQuery
      </h3>
      <div className="metricsContainer">
        <div id="queryRuntimeBlock"  className="queryBlock">
          <h5 className="metricNums">
            {/* query runtime --> display result from backend here */}
            {/* {props.queryRuntime} */}
            2.5
          </h5>
          <p className="metricLabel">Query Runtime <br/>(ms)</p>
        </div>

        <div id="queryThroughputBlock" className="queryBlock">
          <h5 className="metricNums">
            {/* query throughput --> display result from backend here */}
            {/* {props.queryThroughput} */}
            0.6
          </h5>
          <p className="metricLabel"> Query Throughput <br />(amount/ms)</p>
        </div>
      </div>
    </div>
  )

}

export default ResultsItem;