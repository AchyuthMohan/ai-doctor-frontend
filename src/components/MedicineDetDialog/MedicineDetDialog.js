import React from "react";
import "./MedicineDetDialog.css";
import { Dialog } from "@mui/material";
const MedicineDetDialog = ({open,handleClose}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "50%", borderRadius: 5, m: 2, minHeight: "70vh" },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
        <div className="med_dialog__main">

        </div>
    </Dialog>
  );
};

export default MedicineDetDialog;
