import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
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
      <MainLayout>
        <div className="docs__list_main_contain">
          {Object.keys(currentDoc).length !== 0 ? (
            <DoctorProfile doctor={currentDoc} />
          ) : null}
          <h1>Doctors</h1>
          <div className="doctors__cards_container">
            {doctors?.map((doctor, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCurrentDoc(doctor);
                  }}
                >
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
      </MainLayout>
    );
  }
};

export default DoctorList;
