import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/public/categories.json").then((res)=>res.json());


const Categories = () => {
    const categories =use(categoryPromise);
    return (
        <div className=''>
            <h1 className='shadow-md p-3 rounded-md font-bold text-center'>All Categories ({categories.length})</h1>

            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map((category)=>(
                        <NavLink to={`/category/${category.id}`} className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent" key={category.id}>{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;