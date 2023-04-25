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
<<<<<<< HEAD
            
=======
            <div className="flex-box">
              <div className="head">
              APPOINTMENTS
              </div>
             
              <div className="content">                
                DATE &nbsp;&nbsp;&nbsp; TIME
              </div>
            </div>
            <div className="flex-box">
              <div className="head">
              PURCHASE HISTORY
              </div>
            </div>
>>>>>>> bbb8f268c6f6bbb9b206adac5fa6a513e0b71916
          </div>
        </div>
    </MainLayout>
  )
}
export default Profile