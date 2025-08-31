import React, { use } from 'react';
const categoryPromise = fetch("/public/categories.json").then((res)=>res.json());


const Categories = () => {
    const categories =use(categoryPromise);
    return (
        <div>
            <h1 className='font-bold'>Categories {categories.length}</h1>
        </div>
    );
};

export default Categories;