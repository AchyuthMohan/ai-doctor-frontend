import React, { useEffect, useState } from "react";
import "./Medicines.css";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import Loader from "../../components/Loader/Loader";
import MedicineDetDialog from "../../components/MedicineDetDialog/MedicineDetDialog";
const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const[currMedicine,setCurrMedicine]=useState({})
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios.get(`${baseUrl}/medicines/`).then(
      (response) => {
        setMedicines(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="medicines__page_hol">
        <MedicineDetDialog  open={open} handleClose={handleClose} medicine={currMedicine} />
        <h1>Medicines</h1>
        <div class="meds__container">
          {medicines?.map((medicine) => {
            return (
              <div
                class="medicine_box_det"
                onClick={() => {
                  setOpen(true);
                  setCurrMedicine(medicine)
                }}
              >
                <img
                  src={medicine.image}
                  alt=""
                />
                <p class="med__name">
                  {medicine.name}: {medicine.qty} Mg
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Medicines;
