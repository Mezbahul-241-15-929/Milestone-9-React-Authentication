import React from 'react';
import SocialLogin from './RideAside/SocialLogin';
import FindUs from './RideAside/FindUs';
import Qzone from './RideAside/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;