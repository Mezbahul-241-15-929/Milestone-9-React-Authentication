import React, { Suspense } from 'react';
import Categories from './LeftAside/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;