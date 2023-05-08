import React from "react";
import "./MedPurchHistoryCrd.css";
const MedPurchHistoryCrd = ({medicine}) => {
  return (
    <div className="med_pur__card_main">
      <div className="prchs_name_img_container">
        <img
          src={medicine.medicine_image}
          alt=" "
        />
        <p>Medicine Name</p>
      </div>

      <div className="med_history__desc">
        <p>
          <span>Material</span>
          <span>Leather</span>
        </p>
        <p>
          <span>Material</span>
          <span>Leather</span>
        </p>
        <p>
          <span>Material</span>
          <span>Leather</span>
        </p>
        <p>
          <span>Material</span>
          <span>Leather</span>
        </p>
      </div>
      <p className="med_hist_price">
        <span>$400</span>
        <span>2</span>
      </p>
    </div>
  );
};

export default MedPurchHistoryCrd;
