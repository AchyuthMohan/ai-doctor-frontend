import React from 'react'
import './DoctorList.css'

const DoctorProfile = ({doctor}) => {
  return (
    <div className="doc__profile__main">
        <div className="image__section_profile">
          <img src="http://localhost:8000/media/doctor_images/depositphotos_391545206-stock-photo-happy-male-medical-doctor-portrait_55EDMJf.jpg" alt=" " />
          <p>{doctor.name}</p>
        </div>
        <div className="personal__doc_profile_info">
          <p className='doc_name_inside_profile'>{doctor.name}</p>
          <p>{doctor.special}</p>
          <div className="exp__profile_doc">
            <p>years of experience: {doctor.experience}</p>
            <p>Education: MBBS,MBA,BTECH</p>
            <p>consulation days: mon-thu</p>
            <p>consulation time: 9:30am - 9:30pm</p>
          </div>
        </div>
        <div className="book__appt_profile">
            <button className='book__apt_btn'>BOOK APPOINTMENT</button>
        </div>
    </div>
  )
}

export default DoctorProfile