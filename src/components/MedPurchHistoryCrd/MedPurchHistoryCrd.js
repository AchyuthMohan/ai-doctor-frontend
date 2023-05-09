import React, { useContext } from "react";
import "./MedPurchHistoryCrd.css";
import { UserContext } from "../../contexts/UserContext";

const MedPurchHistoryCrd = ({ medicine }) => {
  const { curruserid } = useContext(UserContext);
  if (medicine.user_foreign === curruserid) {
    return (
      <div className="med_pur__card_main">
        <div className="prchs_name_img_container">
          <img src={medicine.medicine_image} alt=" " />
          <p>{medicine.medicine_name}</p>
        </div>

        <div className="med_history__desc">
          <p>
            <span>Date</span>
            <span>{medicine.date_of_purchase}</span>
          </p>
        </div>
        <p className="med_hist_price">
          <span>$ {medicine.medicine_price}</span>
          <span>{medicine.medicine_no_of}</span>
          <span>
            Total: $ {medicine.medicine_price * medicine.medicine_no_of}
          </span>
        </p>
      </div>
    );
  }
};

export default MedPurchHistoryCrd;
