import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import SchemaPanel from '../components/SchemaPanel.jsx'
import SchemaMainArea from './SchemaMainArea.jsx'
import DatabasePanel from '../components/DatabasePanel.jsx'
import DatabaseItem from '../components/DatabaseItem.jsx'

const LandingPage = (props) => {
  return (
        <div id="landingPage">
            <Navbar />
            <div className="mainArea">
                <SchemaPanel
                    schemaList={props.schemaList}
                />
                <SchemaMainArea
                    handleSaveSchema={props.handleSaveSchema}
                    handleGenerateTestDatabase={props.handleGenerateTestDatabase}
                    schemaList={props.schemaList}
                />
                <DatabasePanel
                    testDatabasesList={props.testDatabasesList}
                />
            </div>
        </div>
  )
}

export default LandingPage
