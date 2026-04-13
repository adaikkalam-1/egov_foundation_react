import React from "react";
import "./sky.css";

const SkyLoading = () => {
  return (
    <div className="product_card skeleton-card">
      <div className="img-container skeleton"></div>

      <div className="product_card_body d-flex justify-content-between">
        <div className="skeleton text-skeleton"></div>
        <div className="skeleton price-skeleton"></div>
      </div>
    </div>
  );
};

export default SkyLoading;
