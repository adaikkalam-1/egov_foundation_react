import React from "react";
import "./noData.css";
import noDataImage from "../../assets/noData.png";
const NoData = () => {
  return (
    <div className="no-data-wrapper text-center ">
      <div className="no-data-box">
        <img src={noDataImage} alt="no-data" className="no-data-img" />

        <h4 className="fw-bold mt-3">No Products Found</h4>

        <p className="text-muted">We couldn't find any products matching.</p>
      </div>
    </div>
  );
};

export default NoData;
