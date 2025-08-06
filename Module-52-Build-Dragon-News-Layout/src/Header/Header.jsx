import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-3'>
            <img className='w-[350px]' src={logo} alt="" />
            <h2>Journalism Without Fear or Favour</h2>
            <h3>Sunday, November 27, 2025</h3>
        </div>
    );
};

export default Header;