import React from "react";
import { Link } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';

function NavBar() {

    return (
        <div className="navbar">
            
            <nav className="nav-links">
            <h1> Simple Blog List</h1>
                {/* <ul>
                    <li> */}
                {/* <HomeIcon /> */}
                <Link to="/">Home</Link>
                    {/* </li>
                    <li> */}
                {/* <InfoIcon /> */}
                <Link to="/about">About</Link>
                    {/* </li>
                    <li> */}
                <Link to="/create-post">Create Post</Link>
                    {/* </li>
                </ul> */}
            </nav>
            <hr />
        </div>

    );
 }

export default NavBar;