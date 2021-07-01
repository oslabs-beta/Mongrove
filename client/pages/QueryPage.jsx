import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import QueriesPanel from '../components/QueriesPanel.jsx'
import QueriesMainArea from './QueriesMainArea.jsx'
import DatabasePanel from '../components/DatabasePanel.jsx'
import { ipcRenderer } from 'electron'

const QueryPage = (props) => {
  return (
    <div id="queryPage">
      <Navbar />
      <div className="queryMainArea">
          <QueriesPanel
            {...props}
          />
          <QueriesMainArea
            {...props}
          />
          <DatabasePanel
            testDatabasesList={props.testDatabasesList}
          />
      </div>
    </div>
  )
}

export default QueryPage
