import React from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import QueriesMainArea from './QueriesMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';

// eventually add a graphs/visualization component

const QueryPage = (props) => {

   
  return (
    <div id="queryPage">
      <Navbar />
      <div className="queryMainArea">
          <QueriesPanel />
          <QueriesMainArea />
          {/* <DatabasePanel /> */}
          <DatabasePanel 
            testDatabasesList={props.testDatabasesList}
            />
      </div>
    </div>
  );
}


export default QueryPage;