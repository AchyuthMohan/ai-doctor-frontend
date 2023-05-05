import React from "react";
import "./DoctorList.css";
import DoctorCard from "./DoctorCard";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import DoctorProfile from "./DoctorProfile";
const DoctorList = () => {
  const [currentDoc, setCurrentDoc] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${baseUrl}/doctors/`).then(
      (response) => {
        setDoctors(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="docs__list_main_contain">
        {Object.keys(currentDoc).length !== 0 ? (
          <DoctorProfile doctor={currentDoc} />
        ) : null}
        <h1 className="heading__text">Doctors</h1>
        <div className="doctors__cards_container">
          {doctors &&
            doctors
              .sort((a, b) => (a.name < b.name ? -1 : 1))
              .map((doctor, index) => {
                return (
                  <div className="doc__card" onClick={()=>{
                    setCurrentDoc(doctor)
                  }}>
                    <DoctorCard
                      key={index}
                      name={doctor.name}
                      image={doctor.image}
                      spec={doctor.special}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
};

export default DoctorList;
