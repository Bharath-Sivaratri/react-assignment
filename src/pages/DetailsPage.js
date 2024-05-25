import React from "react";
import { useSelector } from "react-redux";
import "../components/DetailsPage.css";

const DetailsPage = () => {
  //Get sepcific data based on Author providing in Route path
  const selectedData = useSelector((state) => state.responseData);
  
  return (
    <div className="details-container">
      {selectedData.urlToImage && (
        <img
          src={selectedData.urlToImage}
          alt={selectedData.title}
          className="details-image"
        />
      )}
      <div className="details-info">
        <div className="details-meta">
          <i title="Published At" className="details-date">
            {new Date(selectedData.publishedAt).toLocaleDateString()}
          </i>
          <i title="Author" className="details-author">
            {selectedData.author ? selectedData.author : "UnKnown Author"}
          </i>
        </div>
        <h3 className="details-title">
          {selectedData.title ? selectedData.title : "Not Defined"}
        </h3>
        <p className="details-description">
          {selectedData.description ? selectedData.description : "Not Defined"}
        </p>
      </div>
      <div>
        <a href={selectedData.url} target="_blank" rel="noreferrer" className="readMore">
          Read More
        </a>
      </div>
    </div>
  );
};

export default DetailsPage;
