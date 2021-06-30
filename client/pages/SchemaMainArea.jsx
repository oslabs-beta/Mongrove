import React from 'react'
import SchemaArea from './SchemaArea.jsx'
import TestDBGenArea from './TestDBGenArea.jsx'

const SchemaMainArea = (props) => {
  return (
        <div id="mainArea" className="mainAreaContainers">
            <SchemaArea {...props} />
            <TestDBGenArea {...props}/>
        </div>
  )
}

export default SchemaMainArea
