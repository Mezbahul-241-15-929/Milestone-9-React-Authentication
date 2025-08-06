import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer.jsx/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <main>
                <section className="left_nev"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;