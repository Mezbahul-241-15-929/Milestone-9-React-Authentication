import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    return (
        <div>
            this is catrory news {id}
        </div>
    );
};

export default CategoryNews;