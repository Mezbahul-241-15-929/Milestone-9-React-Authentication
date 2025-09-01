import React from 'react';
import swimmingimg from "../../../assets/swimming.png"
import classimg from "../../../assets/class.png"
import playimg from "../../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 rounded-xl p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimmingimg} alt="" />
                <img src={classimg} alt="" />
                <img src={playimg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;