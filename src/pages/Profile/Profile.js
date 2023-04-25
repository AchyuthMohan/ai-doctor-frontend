import React from 'react'
import './Profile.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const Profile = () => {
  return (
    <MainLayout>
        <div className="profile__main_pg">
          <div className="profile__card">
            <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt="" />
            <p>Name</p>
            <p>ID</p>
            <p>Age</p>
          </div>
          <div className="booking__section">
            <div className="flex-box">
              APPOINTMENTS
              <div>
                DATE TIME
              </div>
            </div>
            <div className="flex-box">
              PURCHASE HISTORY
            </div>
          </div>
        </div>
    </MainLayout>
  )
}
export default Profile