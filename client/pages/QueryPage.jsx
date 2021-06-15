import React from 'react';
import Navbar from '../components/Navbar.jsx';
import QueriesPanel from '../components/QueriesPanel.jsx';
import MainArea from './MainArea.jsx';

// eventually add a graphs/visualization component

const QueryPage = () => {

   
    return (
        <div id="queryPage">
            <Navbar />
            <QueriesPanel />
            <MainArea />
         </div>
    );
}


export default QueryPage;