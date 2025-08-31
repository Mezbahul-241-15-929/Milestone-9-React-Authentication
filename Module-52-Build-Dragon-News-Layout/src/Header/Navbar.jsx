import React from 'react';
import { NavLink } from 'react-router';
import usericon from "./../assets/user.png";


const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-3'>
            <div className='font-bold'>BD News</div>
            <div className='nav flex gap-5' >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={usericon} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;