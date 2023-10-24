import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

//src
import './Profile.scss'

const Profile = () => {
  return (
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className="profile-section">
          abcsss
        </div>
      </div>
    </div>
  )
}

export default Profile
