import React from "react";
import "./ProfilePage.css"; // Import your CSS file
import Navbar from "../../Navbar/Navbar";
import {profileimage} from "../"

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="row no-gutters">
          <div className="col-md-4 col-lg-4">
            <img
              className="profile-img"
              src=""
              alt="Profile"
            />
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <h3 className="display-5">Amelly Anderson</h3>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-google"></i>
                <i className="fa fa-youtube-play"></i>
                <i className="fa fa-dribbble"></i>
                <i className="fa fa-linkedin"></i>
              </div>
              <div className="p-3 bg-black text-white">
                <h6>Web designer &amp; Developer</h6>
              </div>
              <div className="d-flex flex-row text-white">
                <div className="p-4 bg-primary text-center skill-block">
                  <h4>90%</h4>
                  <h6>Bootstrap</h6>
                </div>
                <div className="p-3 bg-success text-center skill-block">
                  <h4>70%</h4>
                  <h6>Jquery</h6>
                </div>
                <div className="p-3 bg-warning text-center skill-block">
                  <h4>80%</h4>
                  <h6>HTML</h6>
                </div>
                <div className="p-3 bg-danger text-center skill-block">
                  <h4>75%</h4>
                  <h6>PHP</h6>
                </div>
              </div>
            </div>
            <div className="profile-nav"></div>
          </div>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
            <button className='my-btn' style={{width:"49.7%"}}>Bookings</button>
            <button className='my-btn' style={{width:"49%"}}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
