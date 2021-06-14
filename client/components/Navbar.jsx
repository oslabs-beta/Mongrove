import React from 'react';
// import { HashRouter, NavLink, Link, Route, Switch } from "react-router-dom";
// import { IconButton } from '@material-ui/core';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import { HelpOutlineRoundedIcon } from '@material-ui/icons/HelpOutlineRounded';

//imports for opening new browser window from a react element
// const remote = electron.remote;
// const {BrowserWindow} = remote;


//create NavBar component
const Navbar = () => {

  //opened browser window width and height defaults to 800 by 600
//   handleOpenHelp = () => {
//       let win = new BrowserWindow({
//           title:"Help",
//           //hide menu for pop-up browser window
//             //either use the removeMenu() function
//               win.removeMenu();
//             // or set the Menu to null
//               // win.setMenu(null);
//       })
//       win.loadURL('replacethispath(https://www.electronjs.org/docs/api/remote)')
//       //possibly add win.loadfile here??
//   }


  return (
        <div className="navbar">
            <h1>Navbar component rendering</h1>
            {/* <div className="navbarLinks">
                <NavLink to="/landingPage" activeClassName="activeClassName" className="navLink"><h2>CREATE</h2> </NavLink>
                <NavLink to="/queryPage" activeClassName="activeClassName" className="navLink"><h2>TEST</h2></NavLink>
            </div>
            <h1>Mongrove</h1>
            <div className="helpIcon">
              <IconButton onClick={handleOpenHelp} className="helpButton" icon={HelpOutlineRoundedIcon}></IconButton>
            </div> */}
        </div>
  )
};


export default Navbar;