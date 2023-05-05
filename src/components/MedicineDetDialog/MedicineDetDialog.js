import React, { useState,useContext } from "react";
import "./MedicineDetDialog.css";
import { Dialog } from "@mui/material";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import { UserContext } from "../../contexts/UserContext";
const MedicineDetDialog = ({ open, handleClose,medicine }) => {
  const [count, setCount] = useState(1);
  const date =new Date();
  const today=new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth()+1).padStart(2,'0');
  const day =String(today.getDate()).padStart(2,'0');
  const currentDate = year +'-'+month+'-'+day;
  const { curruserid }=useContext(UserContext);
  console.log(date.now)
  const incCount = () => {
    setCount(count + 1);
  };
  const purchaseMedicine=(e)=>{
    e.preventDefault();
    axiosInstance.post(`${baseUrl}/purchase-medicine/`,{
      medicine_image: medicine.image,
      date_of_purchase: currentDate,
      medicine_name: medicine.name,
      medicine_price: medicine.price,
      medicine_no_of: count,
      user_foreign: curruserid,
      medicine_Foreign:medicine.id
      
    }).then((response)=>{
      if(response.status===201){
        alert('Medincine purchased successfully')
        handleClose();
      }else{
        alert("Sorry something went wrong please check the inputs..")
        handleClose();
      }
    },(error)=>{
      alert("Sorry something went wrong please check the inputs..");
      handleClose();
    })
  }
  const decCount = () => {
    if (count >0) {
      setCount(count - 1);
    } else {
      alert("count value cannot be zero");
    }
  };
  return (
    <Dialog
      style={{ padding: 0, borderRadius: 10 }}
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#7B2869',
          },
          width: "100%",
          borderRadius: 5,
          m: 2,
          padding:'2rem',
          height: "70vh",
          overflow: "hidden",
          overflowY:"scroll",
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
          <p>{medicine.name}</p>
          <img
            src={medicine.image}
            alt=" "
          />
        </div>
        <div className="med_dialog__details">
          <p className="in_stock">
            IN STOCK: <span>{medicine.in_stock}</span>
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
              <li>Type: <span>{medicine.type}</span></li>
              <li>Weight: <span>{medicine.weight}</span></li>
              <li>Manufacturer: <span>{medicine.manufacturer}</span></li>
              <li>Contains: <span>{medicine.contains}</span></li>
              <li>Colour: <span>{medicine.color}</span></li>
              <li>Storage: <span>{medicine.storage}</span></li>
              <li>Dosage: <span>{medicine.dosage}</span></li>
            </ul>
          </div>
          <div className="purchase__med_section">
          <h3>
            Rs. <span>{medicine.price}</span>
          </h3>
          <button onClick={purchaseMedicine}>Purchase</button>
          </div>
          
        </div>
      </div>
    </Dialog>
  );
};

export default MedicineDetDialog;
