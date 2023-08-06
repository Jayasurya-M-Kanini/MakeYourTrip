import React from "react";
import "./ProfilePage.css"; // Import your CSS file
import Navbar from "../../Navbar/Navbar";
import profileimage from "../ProfileImage/profile-img.jpg"
import BookingTable from "../Tables/BookingTable";
import { useState,useEffect } from "react";

const ProfilePage = () => {
    const [Bookings, setBookings] = useState([]);

    const userId = 3;
    var GetAllBookings = () => {
      fetch("http://localhost:5027/api/Booking/GetAllBookings", {
        method: "GET",
        headers: {
          accept: "text/plain",
          // Authorization: "Bearer " + localStorage.getItem("Token"),
        },
      }).then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        //   const filtered = myData.filter(booking => booking.userId === userId);
        //   console.log(filtered);
        setBookings(myData);
      });
    };
    useEffect(() => {
      GetAllBookings();
    }, []);
    
    const tour = {
      tourId: 1,
      travelAgentId: 101,
      tourName: "Exploring Ancient Ruins",
      tourDescription: "Discover ancient civilizations through their ruins.",
      tourtype: "Historical",
      departureDate: "2023-09-15T10:00:00.000Z",
      returnDate: "2023-09-25T18:00:00.000Z",
      durationInDays: 11,
      tourPrice: 1200,
      maxCapacity: 20,
      bookedCapacity: 8,
      availability: "Available",
      imageUrl:
        "https://images.unsplash.com/photo-1496297485239-4265d2ba2105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1967&q=80",
      accomodationStatus: "Included",
      cancellationPolicy: "Free",
      bookingRestriction: 3,
      healthAndSafety: "Enhanced safety measures in place.",
      pickupPoints: [
        {
          pickupPointId: 1,
          tourId: 1,
          location: "Hotel A",
          pickupTime: "2023-09-15T09:00:00.000Z",
        },
      ],
      itineraries: [
        {
          itineraryId: 1,
          tourId: 1,
          dayNumber: 1,
          date: "2023-09-15T00:00:00.000Z",
          destinationId: 1,
          dailySchedules: [
            {
              scheduleId: 1,
              itineraryId: 1,
              timing: "09:00 AM",
              activity: "Visit Ancient Temple",
              place: "Temple A",
            },
            {
              scheduleId: 1,
              itineraryId: 1,
              timing: "05:00  PM",
              activity: "Play in the beach",
              place: "Marina Beach",
            },
          ],
        },
        {
          itineraryId: 2,
          tourId: 1,
          dayNumber: 2,
          date: "2023-09-15T00:00:00.000Z",
          destinationId: 2,
          dailySchedules: [
            {
              scheduleId: 1,
              itineraryId: 2,
              timing: "09:00 AM",
              activity: "Visit Ancient Temple",
              place: "Temple A",
            },
          ],
        },
        {
          itineraryId: 3,
          tourId: 1,
          dayNumber: 3,
          date: "2023-09-15T00:00:00.000Z",
          destinationId: 3,
          dailySchedules: [
            {
              scheduleId: 1,
              itineraryId: 3,
              timing: "09:00 AM",
              activity: "Visit Ancient Temple",
              place: "Temple A",
            },
          ],
        },
      ],
      tourDestination: [
        {
          id: 1,
          tourId: 1,
          destinationId: 1,
          destinationimage: "https://example.com/images/destination1.jpg",
          destinationActivity: "Historical Sites",
        },
        {
          id: 4,
          tourId: 1,
          destinationId: 4,
          destinationimage: "https://example.com/images/destination1.jpg",
          destinationActivity: "Historical Sites",
        },
        {
          id: 1,
          tourId: 1,
          destinationId: 7,
          destinationimage: "https://example.com/images/destination1.jpg",
          destinationActivity: "Historical Sites",
        },
      ],
      tourInclusion: [
        {
          id: 1,
          tourId: 1,
          inclusionId: 101,
        },
        {
          id: 1,
          tourId: 1,
          inclusionId: 102,
        },
        {
          id: 1,
          tourId: 1,
          inclusionId: 103,
        },
      ],
      tourExclusion: [
        {
          id: 1,
          tourId: 1,
          exclusionId: 101,
        },
      ],
    };
    
    const Inclusion = [
      {
        inclusionId: 101,
        inclusionDescription: "Free BreakFast",
        tourInclusion: null,
      },
      {
        inclusionId: 102,
        inclusionDescription: "Admission to the sites",
        tourInclusion: null,
      },
      {
        inclusionId: 103,
        inclusionDescription: "Transportation",
        tourInclusion: null,
      },
    ];
    
    const Exclusions = [
      {
        exclusionId: 101,
        exclusionDescription: "Tips",
        tourExclusion: null,
      },
      {
        exclusionId: 102,
        exclusionDescription: "Personal expense",
        tourExclusion: null,
      },
    ];
    
    const destinations = [
      {
        destinationId: 1,
        destinationCityName: "Kolkata",
        country: "India",
        tourDestinations: null,
      },
      {
        destinationId: 4,
        destinationCityName: "Houston",
        country: "USA",
        tourDestinations: null,
      },
      {
        destinationId: 7,
        destinationCityName: "Los Vegas",
        country: "USA",
        tourDestinations: null,
      },
      {
        destinationId: 9,
        destinationCityName: "string",
        country: "string",
        tourDestinations: null,
      },
    ];

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
