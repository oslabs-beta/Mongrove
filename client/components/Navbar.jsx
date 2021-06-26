import React from 'react';
import { NavLink } from "react-router-dom";
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';

//imports for opening new browser window from a react element
// const electron = window.require('electron');
// const remote = electron.remote
// const { BrowserWindow } = remote

const { ipcRenderer } = require('electron')

//create NavBar component
const Navbar = () => {

  //opened browser window width and height defaults to 800 by 600
  const handleOpenHelp = (e) => {
    // console.log('handlehelp clicked')  
   e.preventDefault();
   ipcRenderer.send('open-help')
  }


  return (
    <div id="navbar">

      <div className="navbarLinks">
        {/* navbar: create link  --> redirects to landingPage*/}
        <NavLink 
          to="/" 
          activeClassName="activeClassName" 
          className="navLink"
        >
          <h2>CREATE</h2>
        </NavLink> 

        {/* navbar: test link --> redirects to queryPage */}
        <NavLink
          to="/queryPage" 
          activeClassName="activeClassName" 
          className="navLink"
        >
          <h2>TEST</h2>
        </NavLink>
      </div>

      <h1 id="navbar-header">Mongrove</h1>

      <div className="helpIcon">        
        <IconButton  onClick={handleOpenHelp}>
          <HelpOutlineRoundedIcon/>
        </IconButton>
      </div>
      
      
    </div>
  )
};


export default Navbar;