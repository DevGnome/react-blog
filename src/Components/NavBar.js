// import { Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <div className="nav-bar">
//             <Link to="/">Home</Link>
//             <Link to="/create-post">New Post</Link>
//         </div>
//     );
// }
// export default NavBar;

import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/create-post">New Post</NavLink>
           
        </nav>
    );
}

export default NavBar;