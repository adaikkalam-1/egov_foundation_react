import React from "react";
import { Link } from "react-router-dom";

const EGovCard = ({items}) => {
  return (
    <div className="latest-news-card">
      <div className="img-container">
        <img
          src={items?.image}
          alt="News 1"

        />
      </div>
      <div className="card-body">
        <span className="category-tag">{items?.name}</span>
        <h5 className="card-title">{items?.description}</h5>
        <Link to="/" className="btn-more">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}


export default EGovCard;
