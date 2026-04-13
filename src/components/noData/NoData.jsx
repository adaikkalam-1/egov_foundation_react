import React from "react";
import "./noData.css";

const NoData = () => {
  return (
    <div className="no-data-wrapper text-center ">
      <div className="no-data-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="no-data"
          className="no-data-img"
        />

        <h4 className="fw-bold mt-3">No Products Found</h4>

        <p className="text-muted">We couldn't find any products matching.</p>
      </div>
    </div>
  );
};

export default NoData;
