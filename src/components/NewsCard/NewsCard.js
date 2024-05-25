import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addResponseData } from "../../Redux/Actions/PostNews";

function NewsCard({ article, index }) {
  const dispatch = useDispatch();

  const handleButtonClick = (article) => {
    dispatch(addResponseData(article));
  };
  return (
    <div className="news-card">
      {article.urlToImage ? (
        article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="news-image"
          />
        )
      ) : (
        <img
          src={"./dowjones.jpg"}
          alt={article.title}
          className="news-image"
        />
      )}
      <div className="news-info">
        <div key={index} className="news-meta">
          <span title="Published At" className="news-date">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
          <span title="Author" className="news-author">
            {article.author ? article.author : "UnKnown Author"}
          </span>
        </div>
        <h3 className="news-title">
          {article.title ? article.title : "Not Defined"}
        </h3>
        <p className="news-description">
          {article.description ? article.description : "Not Defined"}
        </p>
      </div>
      <div onClick={() => handleButtonClick(article)}>
        <Link to={`/details/${article.author}`} className="viewMore">
          View More
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
