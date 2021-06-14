import React from 'react';
import Navbar from '../components/Navbar';
import SchemaPanel from '../components/SchemaPanel';
import MainArea from './MainArea';
import DatabasePanel from '../components/DatabasePanel';

//Navbar component

//SchemaPanel component

const LandingPage = () => {

   
    return (
        <div id="landingPage">
            <p>Landing page component rendering</p>
            <Navbar />
            <SchemaPanel />
            <MainArea />
            <DatabasePanel />
        </div>
    );
}


export default LandingPage;