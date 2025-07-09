import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;