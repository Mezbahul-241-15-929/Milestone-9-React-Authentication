import React from 'react';
import swimmingimg from "../../../assets/swimming.png"
import classimg from "../../../assets/class.png"
import playimg from "../../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='shadow-md  rounded-md bg-base-200'>
            <h2 className='font-bold   pt-4 text-center'>QZone</h2>
            <div className='space-y-5 flex flex-col items-center p-3'>
                <img src={swimmingimg} alt="" />
                <img src={classimg} alt="" />
                <img src={playimg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;