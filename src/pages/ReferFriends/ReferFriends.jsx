import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BatchIcon from "../../assets/img/batch-icon.png";
import SignupIcon from "../../assets/img/signup-icon.png";
import ShareIcon from "../../assets/img/share.png";
import ReferFriendImage from "../../assets/img/referFriendImage.png";
import FacebookIcon from "../../assets/img/facebook-icon.png";
import TwitterIcon from "../../assets/img/twitter-icon.png";
import LinkedInIcon from "../../assets/img/linkedin-icon.png";
import EmailIcon from "../../assets/img/email-icon.png";

const ReferFriends = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
        <div className="refer-friend-section">
          <div className="rfs-inner">
          <div className="rfs-start">
                <div className="rfs-left-area">
                  <div className="rfs-inner">
                    <div className="rfs-top-heading">
                      <p className="rfs-heading">How does it work?</p>
                      <p>If you know anyone who could be interested in using LAMT for their business, link us up with them by 
                        using your unique referral code and we'll give you both £100.</p>
                    </div>
                    <div className="rfs-content">
                      <img src={ShareIcon} alt="Share-Icon" />
                      <p className="rfs-para">
                      Share your unique referral link below with your friends.
                      </p>
                    </div>

                    <div className="rfs-content">
                      <img src={SignupIcon} alt="Signup-Icon" />
                      <p className="rfs-para">
                      Get them to sign up and create an account with us using the link you provided.
                      </p>
                    </div>

                    <div className="rfs-content">
                      <img src={BatchIcon} alt="Batch-Icon" />
                      <p className="rfs-para">
                      Once they've completed their trial, you'll both get £100 off of your LAMT subscription!
                      </p>
                    </div>

                    <div className="rfs-link">
                      <p className="rfs-para">
                      Your unique referral code
                      </p>

                      <div className="link-fields">
                        <input type="text" className='link-input' placeholder='https://lookaftermytaxes.co/r/cleopfu0t13123681rboztmv5h9o'/>
                        <button className='btn-copy-link'>Copy Link</button>
                      </div>

                      <p className="rfs-para">
                      Or share via
                      </p>

                      <div className="social-icons">
                        <img src={EmailIcon} className='social-icon-img' alt="Eamil" />
                        <img src={TwitterIcon} className='social-icon-img' alt="Twitter" />
                        <img src={LinkedInIcon} className='social-icon-img' alt="Linkedin" />
                        <img src={FacebookIcon} className='social-icon-img' alt="Facebook" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="rfs-right-area">
                  <img src={ReferFriendImage} alt="Refer-Friend-Image" />
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ReferFriends