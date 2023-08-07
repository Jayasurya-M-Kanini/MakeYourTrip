import React from "react";
import "./ProfilePage.css"; // Import your CSS file
import Navbar from "../../Navbar/Navbar";
import profileimage from "../ProfileImage/profile-img.jpg"
import BookingTable from "../Tables/BookingTable";
import { useState,useEffect } from "react";

const ProfilePage = () => {
    const [Bookings, setBookings] = useState([]);

    const userId = 3;
    // var GetAllBookings = () => {
    //   fetch("http://localhost:5027/api/Booking/GetAllBookings", {
    //     method: "GET",
    //     headers: {
    //       accept: "text/plain",
    //       // Authorization: "Bearer " + localStorage.getItem("Token"),
    //     },
    //   }).then(async (data) => {
    //     var myData = await data.json();
    //     console.log(myData);
    //     //   const filtered = myData.filter(booking => booking.userId === userId);
    //     //   console.log(filtered);

    //     // setBookings(myData);
    //     const tourDetailsList=GetAllTours();
    //     const filtered = myData.filter(booking => booking.userId === userId);
    //   setBookings(filtered.map(booking => ({
    //     ...booking,
    //     status: getStatus(booking,tourDetailsList), // Calculate the status for each booking
    //   })));
    //   });
    // };
    // useEffect(() => {
    //   GetAllBookings();
    // }, []);

    // const[tourDetails,settourDetails]=useState([])
    // var GetAllTours = () => {
    //   fetch("http://localhost:5246/api/TourDetails", {
    //     method: "GET",
    //     headers: {
    //       accept: "text/plain",
    //       // Authorization: "Bearer " + localStorage.getItem("Token"),
    //     },
    //   }).then(async (data) => {
    //     var myData = await data.json();
    //     console.log(myData);

    //   });
    // };

    // const getStatus = (booking, tourDetailsList) => {
    //   const currentDate = new Date();
      
    //   // Find the tour details for the booking's tourId
    //   const tourDetails = tourDetailsList.find(details => details.tourId === booking.tourId);
      
    //   if (!tourDetails) {
    //     return 'Unknown';
    //   }
      
    //   const departureDate = new Date(tourDetails.departureDate);
    //   const returnDate = new Date(tourDetails.returnDate);
    
    //   if (currentDate < departureDate) {
    //     return 'Upcoming';
    //   } else if (currentDate >= departureDate && currentDate <= returnDate) {
    //     return 'Ongoing';
    //   } else {
    //     return 'Completed';
    //   }
    // };
    

    // var GetAllTours = () => {
    //   fetch("http://localhost:5027/api/", {
    //     method: "GET",
    //     headers: {
    //       accept: "text/plain",
    //       // Authorization: "Bearer " + localStorage.getItem("Token"),
    //     },
    //   }).then(async (data) => {
    //     var myData = await data.json();
    //     console.log(myData);
    //     //   const filtered = myData.filter(booking => booking.userId === userId);
    //     //   console.log(filtered);
    //     setBookings(myData);
    //   });
    // };
    // useEffect(() => {
    //   GetAllTours();
    // }, []);
  
    const filtered = Bookings.filter(b => b.userId === userId);
    console.log(filtered);
    const filteredCount = filtered.length; // Get the count of filtered bookings



  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="row no-gutters">
          {/* <div className="col-md-4 col-lg-4">
            <img
              className="profile-img"
              src={profileimage}
              alt="Profile"
            />
          </div> */}
          <div className="col-md-12 col-lg-12">
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <h3 className="display-5">Amelly Anderson</h3>
              </div>
              <div className=" p-3 bg-black text-white">
                <h6 style={{paddingLeft:"2.1rem"}}>EmailId | Phone Number</h6>
              </div>
              
              {/* <div className="d-flex flex-row text-white">
                <div className="p-4 bg-primary text-center skill-block">
                  <h4>{filteredCount}</h4>
                  <h6>Total Bookings</h6>
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
                </div>  */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",gap:"1rem",marginTop:"2rem",marginBottom:"2rem"}}>
            <button className='my-btn' style={{width:"49.7%"}}>Bookings</button>
            <button className='my-btn' style={{width:"49%"}}>Edit Profile</button>
        </div>
        <div className="booking-table">
            <BookingTable/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
