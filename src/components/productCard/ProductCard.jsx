import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product_card">
      <div className="img-container">
        <img src={item.image} alt="News 1" className="img-fluid" />
      </div>
      <div className="product_card_body d-flex flex-row align-items-center justify-content-between gap-2">
        <div className="product_name text-truncate">{item.name}</div>
        <div className="product_price">{item.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
