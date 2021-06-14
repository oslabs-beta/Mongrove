import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';

// renderer process
// const { ipcRenderer } = require('electron');

// ipcRenderer.send('anything-asynchronous', 'ping');




//render landing page when app is first opened

const App = () => {
    return (
        <div>
            App component rendering!!
            {/* <LandingPage /> */}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));