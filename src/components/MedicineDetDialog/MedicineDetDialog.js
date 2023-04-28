import React, { useState } from "react";
import "./MedicineDetDialog.css";
import { Dialog } from "@mui/material";
const MedicineDetDialog = ({ open, handleClose }) => {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };
  return (
    <Dialog
      style={{ padding: 0, borderRadius: 10 }}
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "70vh" },
      }}
      open={open}
      keepMounted
      onClose={handleClose}
      disableScrollLock
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="med_dialog__main">
        <div className="med_dialog_prof">
          <p>Name of medicine</p>
          <img
            src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
            alt=" "
          />
        </div>
        <div className="med_dialog__details">
          <p className="in_stock">
            IN STOCK: <span>200</span>
          </p>
          <div className="qty__selector">
            <p>Quantity required:</p>
            <div className="count_select_main">
              <p className="increment__operator" onClick={incCount}>
                +
              </p>
              <p>count</p>
              <p className="increment__operator" onClick={decCount}>
                -
              </p>
            </div>
          </div>
          <div className="dialog__properts"></div>
          <p>
            Rs. <span>200.20</span>
          </p>
          <button>Purchase</button>
        </div>
      </div>
    </Dialog>
  );
};

export default MedicineDetDialog;
