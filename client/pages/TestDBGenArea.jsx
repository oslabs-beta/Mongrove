import React, { useState } from 'react'

const TestDBGenArea = (props) => {
  // state handling for test db user inputs
  const [testDBname, setTestDBname] = useState('')
  const [selectedSchema, setSelectedSchema] = useState('')
  const [numberOfRows, setNumberOfRows] = useState(0)

  // FOR POPULATING SCHEMA SELECTION DROP DOWN
  // having schemas in schema list appear as a selection option
  const schemaSelection = [<option key={'a'} value={''}>{'Select Schema Below'}</option>]
  for (let i = 0; i < props.schemaList.length; i++) {
    schemaSelection.push(
            <option key={i} value={props.schemaList[i].name}>
                {props.schemaList[i].name}
            </option>
    )
  }

  // FOR DISABLING 'Configure Test DBBUTTON
  // disable testDBgen area until all input fields have some input
  const isActive = () => {
    if (props.schemaList.length > 0 && selectedSchema !== '' && testDBname.length && numberOfRows >= 1) return true
  }
  const isEnabled = isActive()

  return (
        <div id="testdbGenArea" className="mainAreaComponents">
            <h2>Test Database Configuration</h2>

            <label htmlFor="testdbName">Test Database Name</label>
            <input
                type="text"
                id="testdbName"
                name="testdbName"
                value={testDBname}
                onChange={(e) => { setTestDBname(e.target.value) }}
            />

            <label htmlFor="selectSchema">Select Schema Name</label>
            <select
                id="selectSchema"
                name="selectSchema"
                value={selectedSchema}
                onChange={(e) => { setSelectedSchema(e.target.value) }}
            >
            {/* placeholder values for schema selection */}
                {schemaSelection}
            </select>

            <label htmlFor="rowsNum">Enter Number Of Documents</label>
            <input
                type="text"
                id="rowsNum"
                name="rowsNum"
                value={numberOfRows}
                onChange={(e) => { setNumberOfRows(e.target.value) }}
            />

            <button
                id="genTestdbBn"
                className="mainAreaBn"
                disabled={!isEnabled}
                onClick={() => {
                  // console.log(testDBname, selectedSchema, numberOfRows);
                  props.handleGenerateTestDatabase(testDBname, selectedSchema, numberOfRows)
                }}
            >
                Configure Test Database
            </button>
        </div>
  )
}

export default TestDBGenArea
