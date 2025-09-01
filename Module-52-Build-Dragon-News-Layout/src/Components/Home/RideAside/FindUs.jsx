import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='shadow-md p-3 rounded-md'>
            <h2 className='font-bold mb-5 text-center'>Find Us On</h2>
            <div>


                <div className="join join-vertical w-full">
                    <button className="btn join-item"><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn join-item"><FaInstagram></FaInstagram>Instagram</button>
                    <button className="btn join-item"><FaTwitter></FaTwitter>Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;