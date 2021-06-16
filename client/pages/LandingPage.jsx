import React from 'react';
import Navbar from '../components/Navbar.jsx';
import SchemaPanel from '../components/SchemaPanel.jsx';
import SchemaMainArea from './SchemaMainArea.jsx';
import DatabasePanel from '../components/DatabasePanel.jsx';

//Navbar component

//SchemaPanel component

const LandingPage = () => {

   
  return (
      <div id="landingPage">
          <Navbar />
          <div className="mainArea">
            <SchemaPanel />
            <SchemaMainArea />
            <DatabasePanel />
          </div>
      </div>
  )
}


export default LandingPage;