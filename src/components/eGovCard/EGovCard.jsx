import React from "react";
import { Link } from "react-router-dom";

const EGovCard = () => {
  return (
    <div className="latest-news-card">
      <div className="img-container">
        <img
          src="https://blocks.astratic.com/img/general-img-square.png"
          alt="News 1"
        />
      </div>
      <div className="card-body">
        <span className="category-tag">Transformation</span>
        <h5 className="card-title">State-led transition in Haryana</h5>
        <Link to="/" className="btn-more">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default EGovCard;
