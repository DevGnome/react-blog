import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FiberNewIcon from '@mui/icons-material/FiberNew';

function NavBar() {

    return (
        <div className="navbar">
            
            <nav className="nav-links">
            <h1>Project Blog </h1>
                <Button component={Link} to="/" startIcon={<HomeIcon />} color="info" variant="outlined" size="medium">Home</Button>
                <Button component={Link} to="/about" startIcon={<InfoIcon />} color="info" variant="outlined" size="medium">About</Button>
                <Button component={Link} to="/create-post" startIcon={<FiberNewIcon />} color="info" variant="outlined" size="medium">New Post</Button>
            </nav>
            <hr />
        </div>

    );
 }

export default NavBar;