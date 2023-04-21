import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./DoctorList.css";
import DoctorCard from "./DoctorCard";
import axios from "axios";
import { baseUrl } from "../../utils/urls";
import { useEffect } from "react";
import { useState } from "react";
const DoctorList = () => {
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
    return <h1>loading...</h1>;
  } else {
    return (
      <MainLayout>
        <div className="docs__list_main_contain">
          <h1>Doctors</h1>
          <div className="doctors__cards_container">
            {doctors?.map((doctor, index) => {
              return (
                <DoctorCard
                  key={index}
                  name={doctor.name}
                  image={doctor.image}
                  spec={doctor.spec}
                />
              );
            })}
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default DoctorList;
