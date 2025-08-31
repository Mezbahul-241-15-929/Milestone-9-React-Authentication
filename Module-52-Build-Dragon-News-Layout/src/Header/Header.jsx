import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';
import LetestNews from '../Components/LetestNews';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center p-4 gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <h2 className='text-accent'>Journalism Without Fear or Favour</h2>
            {/* <h3>Sunday, November 27, 2025</h3> */}
            <h3>{format(new Date(),"EEEE, MMMM MM, yyyy")}</h3>
            <section className='w-11/12 mx-auto my-3'>
                <LetestNews></LetestNews>
            </section>
        </div>
    );
};

export default Header;