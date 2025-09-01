import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
        }
        else if (id == "1") {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [data, id]);
    return (
        <div>
            <div className='font-bold mb-5 flex justify-between shadow-md p-3 rounded-md'>
                <h2 className=''>
                    Dragon News Home
                </h2>
                <h2>Total news : {categoryNews.length}</h2>
            </div>

            <div>
                {
                    categoryNews.map((news) => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;