import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer.jsx/Footer';
import Header from '../Header/Header';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RightAside';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;