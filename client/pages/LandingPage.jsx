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
          <p>Landing page component rendering</p>
          <Navbar />
          <SchemaPanel />
          <SchemaMainArea />
          <DatabasePanel />
      </div>
  )
}


export default LandingPage;