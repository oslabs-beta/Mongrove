import React from 'react';

const ResultsItem = (props) => {

  return (
    <div className="resultItem">
      <h3 className="result-queryName">
        {props.id + 1}. {props.queryName}
      </h3>
      
      <div className="result-div-queryValue">
        <h5 className="result-queryValue">
          {props.queryValue}
        </h5>
      </div>

      <div className="metricsContainer">
        <div id="queryRuntimeBlock"  className="queryBlock">
          <h5 className="metricNums">
            {/* query runtime --> display result from backend here */}
            {Math.floor(props.queryRuntime)}
          </h5>
          <p className="metricLabel">Query Runtime <br/>(ms)</p>
        </div>

        <div id="queryThroughputBlock" className="queryBlock">
          <h5 className="metricNums">
            {/* query throughput --> display result from backend here */}
            {Math.ceil(1000 / Number(props.queryRuntime))}
            {/* 0.5 */}
          </h5>
          <p className="metricLabel"> Query Throughput <br/>per sec</p>
        </div>
      </div>

      <div className="result-div-schemaSection">
        <h5 className="result-schemaName">
          {props.schemaName}
        </h5>
        <h6 className="result-schemaValue">
          {props.schemaValue}
        </h6>
      </div>
      <div className="result-div-dbData">
        <h5 className="result-dbName">
          {props.dbName}
        </h5>
        <h6 className="result-dbNum">
          Number of documents: {props.numOfDocs}
        </h6>
      </div>
    </div>
  )

}

export default ResultsItem;
