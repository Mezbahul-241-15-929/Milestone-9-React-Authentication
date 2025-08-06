import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <h2 className='text-accent'>Journalism Without Fear or Favour</h2>
            <h3>Sunday, November 27, 2025</h3>
            <h3>{format(new Date(),"EEEE, MMMM MM, yyyy")}</h3>
        </div>
    );
};

export default Header;