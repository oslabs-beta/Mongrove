import React from 'react'
import QueryArea from './QueryArea.jsx'
import ResultsArea from './ResultsArea.jsx'
import Chart from '../components/Chart.jsx'

const QueriesMainArea = (props) => {
  return (
        <div id="queriesMainArea" className="mainAreaContainers">
            <QueryArea {...props}/>
            <Chart {...props}/>
            <ResultsArea {...props}/>
        </div>
  )
}

export default QueriesMainArea
