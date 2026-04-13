import React from "react";
import "./egov.css";
const EGovSkyLoading = () => {
  return (
    <div className="latest-news-card skeleton_card">
      <div className="img_container skeleton"></div>

      <div className="card_body mt-2 p-3">
        <div className="skeleton tag_skeleton mb-2"></div>

        <div className="skeleton title_skeleton mb-3"></div>

        <div className="skeleton btn_skeleton"></div>
      </div>
    </div>
  );
};

export default EGovSkyLoading;
