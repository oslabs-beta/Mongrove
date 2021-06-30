import React from 'react';
import { NavLink } from "react-router-dom";
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';
const { ipcRenderer } = require('electron');

//create NavBar component with routing nav links and help button
const Navbar = () => {

  //handle opening HelpModal in new browser window when help button is clicked
  //IPC renderer sends a message to IPC main
  const handleOpenHelp = (e) => {
   e.preventDefault();
   ipcRenderer.send('open-help')
  }

  return (
    <div id="navbar">

      <div className="navbarLinks">
        {/* navbar: 'CREATE' link  --> routes to landingPage */}
        <NavLink 
          to="/" 
          activeClassName="activeClassName" 
          className="navLink"
        >
          <h2>CREATE</h2>
        </NavLink> 

        {/* navbar: 'TEST' link --> routes to queryPage */}
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