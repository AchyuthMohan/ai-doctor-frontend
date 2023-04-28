import React from "react";
import "./Medicines.css";
import MainLayout from "../../components/MainLayout/MainLayout";
const Medicines = () => {
  return (
    <MainLayout>
      <h1>Medicines</h1>
      <div class="meds__container">
        <div class="medicine_box_det">
          <div className="med__front">
            <img
              src="https://imgs.search.brave.com/MoP_HouzU278dGNqaOkhb4DuHlXG5WA3XeZ8Luu-3EA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b2htYW4uaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDIv/T0hNQU4tRGVsYXkt/Q2Fwc3VsZXMtaW1n/LmpwZw"
              alt=""
            />
            <div class="name">NAME OF MEDICINE: STOCK QTY:</div>
          </div>
          <div className="med__back">
            <p>medicine name</p>
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Medicines;
