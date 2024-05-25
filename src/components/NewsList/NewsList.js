import React from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import './NewsList.css';

const NewsList = ({ articles }) => (
    <div className="news-list">
        {articles.map((article, index) => (
            <NewsCard key={index} article={article} index={index} articles={articles}/>
        ))}
    </div>
);

export default NewsList;
