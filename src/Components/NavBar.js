import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div className="nav-bar">
            <h1> Note Taking App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/create-note">Create Note</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>

    );
 }

export default NavBar;