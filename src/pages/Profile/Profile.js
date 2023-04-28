import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
        <div className="profile__main_pg">
          <div className="profile__card">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt="" />
            <p>Name</p>
            <p>ID</p>
            <p>Age</p>
          </div>
          <div className="booking__section">
            <div className="profile__activ_box">
              <div className="profile__head">
              APPOINTMENTS
              </div>
             
              <div className="content">                
                DATE &nbsp;&nbsp;&nbsp; TIME
              </div>
            </div>
            <div className="profile__activ_box">
              <div className="profile__head">
              PURCHASE HISTORY
              </div>
            </div>
          </div>
        </div>
  )
}
export default Profile