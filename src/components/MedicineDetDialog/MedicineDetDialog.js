import React, { useState } from "react";
import "./MedicineDetDialog.css";
import { Dialog } from "@mui/material";
const MedicineDetDialog = ({ open, handleClose }) => {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      alert("count value cannot be negative");
    }
  };
  return (
    <Dialog
      style={{ padding: 0, borderRadius: 10 }}
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: {
          width: "100%",
          borderRadius: 5,
          m: 2,
          minHeight: "70vh",
          overflow: "hidden",
        },
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
              <p className="count__value">{count}</p>
              <p className="increment__operator" onClick={decCount}>
                -
              </p>
            </div>
          </div>
          <div className="dialog__properts">
            <ul>
              <li>helo</li>
              <li>fhufur3nfiuf</li>
              <li>wjebnfuh3urh3ir</li>
            </ul>
          </div>
          <h3>
            Rs. <span>200.20</span>
          </h3>
          <button>Purchase</button>
        </div>
      </div>
    </Dialog>
  );
};

export default MedicineDetDialog;
