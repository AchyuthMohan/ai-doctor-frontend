import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './DoctorList.css'
import DoctorCard from './DoctorCard'
const DoctorList = () => {
  return (
    <MainLayout>
        <div className="docs__list_main_contain">
            <h1>Doctors</h1>
            <div className="doctors__cards_container">
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>
              <DoctorCard/>

            </div>
        </div>
    </MainLayout>
  )
}

export default DoctorList