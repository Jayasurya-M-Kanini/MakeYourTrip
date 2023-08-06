import { AiOutlineInfoCircle } from "react-icons/ai";
import Footer from "../Footer/Footer";
import "../LandingPage/LandingPage.css";
import Navbar from "../Navbar/Navbar";
import "../TourPage/TourPage.css";
import { useEffect,useState } from "react";
import { Button, Input, Select } from "antd";
import OTPModal from "../OTPModal/OTPModal";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import BookingOTPModal from "../BookingModals/BookingOTPModal";

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
    {
        pickupPointId: 2,
        tourId: 1,
        location: "Hotel B",
        pickupTime: "2023-09-15T09:00:00.000Z",
      },
      {
        pickupPointId: 3,
        tourId: 1,
        location: "Hotel C",
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

function BookingPage() {
  const [booking, setBooking] = useState({
    tourId: localStorage.getItem('tourId'),
    userId:  localStorage.getItem('userId'),
    bookingDate: new Date().toISOString(),
    pickupPoint: "",
    additionalRequests: "",
    passengers: [
      {
        name: "",
        age: "",
        gender: "",
      },
    ],
    payments: [
      {
        paymentDay: new Date().toISOString(),
        paymentAmount: 0,
        discountAmount: 0,
        walletAmount: 0,
        netPayableAmount: 0,
        },
    ],
  });

const handlePassengerChange = (index, field, value) => {
    setBooking(prevBooking => {
      const updatedPassengers = [...prevBooking.passengers];
      updatedPassengers[index] = {
        ...updatedPassengers[index],
        [field]: value
      };
      return {
        ...prevBooking,
        passengers: updatedPassengers
      };
    });
  };
  


  const getDestination = (id) => {
    // console.log(id);
    const inclusion = destinations.find((item) => item.destinationId === id);
    return inclusion ? inclusion.destinationCityName : "";
  };

  const getDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { weekday: "long" });
  };

  const getMonthAbbreviation = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "short" });
  };

  const getDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const [quantity, setQuantity] = useState(1);

  const newPrice = quantity * tour.tourPrice;

const generatePassengerFields = () => {
    return Array.from({ length: quantity }, (_, index) => (
      <div key={index} style={{ marginBottom: '1rem' }}>
            <h6>Person {index+1} Details</h6>
        <Input
          placeholder="Passenger Name"
          value={booking.passengers[index]?.name || ''}
          onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
        />
        <Input
          type="number"
          placeholder="Age"
          value={booking.passengers[index]?.age || ''}
          onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
          style={{ margin: '1rem 0rem' }}
        />
        <Select
          value={booking.passengers[index]?.gender || ''}
          onChange={(value) => handlePassengerChange(index, 'gender', value)}
          style={{ width: '150px' }}
        >
          <Select.Option value="">Select Gender</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </div>
    ));
  };
  
  
  
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    // Check if any passenger fields are empty
    const allPassengerFieldsFilled = booking.passengers.every(
      (passenger) =>
        // passenger.name.trim() === '' ||
        // passenger.age === '' ||
        // passenger.gender === ''
        passenger.name.trim() !== "" &&
        passenger.age !== "" &&
        passenger.gender !== ""
    );
  
//     setIsSubmitDisabled(anyPassengerEmpty);
//   }, [booking.passengers]);
setIsSubmitDisabled(!allPassengerFieldsFilled || !booking.pickupPoint);
}, [booking.passengers, booking.pickupPoint]);
  
useEffect(() => {
    const initialPayments = [
      {
        paymentDay: new Date().toISOString(),
        paymentAmount: newPrice,
        discountAmount: 0,
        walletAmount: 0,
        netPayableAmount: newPrice,
      },
    ];

    setBooking((prevBooking) => ({
      ...prevBooking,
      payments: initialPayments,
    }));
  }, []);

  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleSubmit = () => {
    console.log(booking);
    // sendOtp();
    setIsOTPModalOpen(true); // Open the OTPModal

  };

//   const sendOtp = async () => {
//     const url = 'https://wipple-sms-verify-otp.p.rapidapi.com/send';
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': 'f911fcb94cmshe09087465281465p17373bjsn056fa197ead5',
//         'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com',
//       },
//       body: JSON.stringify({
//         app_name: 'makeyourtrip',
//         code_length: 6,
//         code_type: 'number',
//         expiration_second: 6000,
//         phone_number: '918610260435',
//       }),
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//       if(response.ok){
//             setIsOTPModalOpen(true); // Open the OTPModal
//       }
//     } catch (error) {
//       console.error(error);
//     }
// };
//     const url = 'https://whatsapp-otp-verification.p.rapidapi.com/auth/client-request-otp';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '7fbd5a3092msh32fc498179997a0p138d21jsn077d0472fc10',
// 		'X-RapidAPI-Host': 'whatsapp-otp-verification.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		phone: '+918610260435',
// 		country: 'India',
// 		message: 'Your OTP: *{code}* - You have *5 minutes* to enter this code'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
//     // if(result.message=="true"){
//         if(response.ok)
//             setIsOTPModalOpen(true); // Open the OTPModal
//     // }
// } catch (error) {
// 	console.error(error);
// }
//   };


  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <headers>
        <Navbar />
      </headers>
      <div
        className="search-main-pan"
        id="tour-main-pan"
        style={{ marginTop: "3.5rem" }}
      >
        <div
          className="main-div-2"
          id="tour-main-div-2"
          style={{ marginTop: "3rem" }}
        >
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
            <h1>{tour.tourName}</h1>
            <h6>A tour to explore the prominent sites with a guide</h6>
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
            <h3>Passenger Details</h3>
            <h6>Please fill all the fields .</h6>
              {generatePassengerFields()}
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
            <h3>Additional Details</h3>
<Select
  value={booking.pickupPoint}
  onChange={(value) => setBooking({ ...booking, pickupPoint: value })}
  style={{ width: '100%', margin: '1rem 0rem' }}
>
  <Select.Option value="">Select Pickup Point</Select.Option>
  {tour.pickupPoints.map((point) => (
    <Select.Option key={point.pickupPointId} value={point.location}>
      {point.location}
    </Select.Option>
  ))}
</Select>

      <Input
        placeholder="Additional Requests"
        type="text"
        value={booking.additionalRequests || ''}
        onChange={(value) => setBooking({ ...booking, additionalRequests: value.target.value })}
        style={{ width: '100%', margin: '1rem 0rem' }}
      />
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
            <h2>Destinations</h2>
            <div
              className="dest-main"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              {tour.tourDestination.map((option) => (
                <div
                  style={{
                    width: "6rem",
                    height: "2.4rem",
                    padding: "0.4rem",
                    border: "2px solid gray",
                    borderRadius: "3rem",
                    textAlign: "center",
                  }}
                >
                  {getDestination(option.destinationId)}
                </div>
              ))}
            </div>
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-2">
            <div className="tour-mini-div-1">
              <h4 style={{ color: "green" }}>
                {tour.cancellationPolicy} Cancellation Available
              </h4>
              <p>When cancelled more than 24 hours before the start time</p>
            </div>
          </div>

          <div className="tour-div-1-filter-1" id="tour-main-div-filter-6">
            <h4>Languages spoken by guide</h4>
            <div
              style={{
                width: "6rem",
                height: "2.4rem",
                padding: "0.4rem",
                border: "2px solid gray",
                borderRadius: "3rem",
                textAlign: "center",
              }}
            >
              <h6>English</h6>
            </div>
          </div>
        </div>
        <div
          className="main-div-1"
          id="tour-main-div-1"
          style={{ backgroundColor: "#fff", marginTop: "3rem" }}
        >
          <div
            className="tour-div-1-filter-1"
            style={{ paddingLeft: "0", paddingTop: "1rem" }}
          >
            <h2>Summary</h2>
            <p style={{ fontSize: "1.3rem" }}></p>
          </div>
          <div
            className="tour-div-1-filter-1"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "0",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid grey",
                  textAlign: "center",
                  borderRadius: "8px",
                  height: "12rem",
                  width: "12rem",
                  backgroundImage: `url(${tour.imageUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
            </div>
            <div>
              <h3>{tour.tourName}</h3>
              <div>
                <p>
                  {getDay(tour.departureDate)}, {getDate(tour.departureDate)}{" "}
                  {getMonthAbbreviation(tour.departureDate)}
                </p>
                <p>{quantity} X Standard Ticket</p>
                <h4>$ {newPrice} /-</h4>
              </div>
            </div>
          </div>
          <div
            className="tour-div-1-filter-1"
            style={{ padding: "1rem", border: "1px solid gray" }}
          >
            <h4>{quantity} X Standard Ticket</h4>
            <div
              className="tour-div-1-filter-1"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0",
              }}
            >
              <div>
                <p>{quantity} X Person</p>
              </div>
              <div>
                <div class="input-group">
                  <p>${newPrice}</p>
                </div>
              </div>
            </div>
            <div
              className="tour-div-1-filter-1"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "0",
                paddingTop: "0",
              }}
            >
              <div>
                <div>
                  <span>Total Price</span>
                </div>
              </div>
              <div>
                <h5>${newPrice}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit-button" style={{width:"90%",margin:"auto" }}>
        <Button type="primary" onClick={handleSubmit} disabled={isSubmitDisabled} style={{width:"100%",height:"3rem"}}>
          <h4>Book</h4>
        </Button>

        </div>
        {isOTPModalOpen && (
        <BookingOTPModal onClose={() => setIsOTPModalOpen(false)} />
      )}
      <footer style={{ marginTop: "3rem" }}>
        <Footer />
      </footer>
    </div>
  );
}

export default BookingPage;


// import { AiOutlineInfoCircle } from "react-icons/ai";
// import Footer from "../Footer/Footer";
// import "../LandingPage/LandingPage.css";
// import Navbar from "../Navbar/Navbar";
// import "../TourPage/TourPage.css";
// import { useEffect,useState } from "react";
// import { Button, Input, Select } from "antd";
// import OTPModal from "../OTPModal/OTPModal";
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
// import BookingOTPModal from "../BookingModals/BookingOTPModal";
// import SuccessModal from "../BookingModals/SuccessModal";

// const tour = {
//   tourId: 1,
//   travelAgentId: 101,
//   tourName: "Exploring Ancient Ruins",
//   tourDescription: "Discover ancient civilizations through their ruins.",
//   tourtype: "Historical",
//   departureDate: "2023-09-15T10:00:00.000Z",
//   returnDate: "2023-09-25T18:00:00.000Z",
//   durationInDays: 11,
//   tourPrice: 1200,
//   maxCapacity: 20,
//   bookedCapacity: 8,
//   availability: "Available",
//   imageUrl:
//     "https://images.unsplash.com/photo-1496297485239-4265d2ba2105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1967&q=80",
//   accomodationStatus: "Included",
//   cancellationPolicy: "Free",
//   bookingRestriction: 3,
//   healthAndSafety: "Enhanced safety measures in place.",
//   pickupPoints: [
//     {
//       pickupPointId: 1,
//       tourId: 1,
//       location: "Hotel A",
//       pickupTime: "2023-09-15T09:00:00.000Z",
//     },
//     {
//         pickupPointId: 2,
//         tourId: 1,
//         location: "Hotel B",
//         pickupTime: "2023-09-15T09:00:00.000Z",
//       },
//       {
//         pickupPointId: 3,
//         tourId: 1,
//         location: "Hotel C",
//         pickupTime: "2023-09-15T09:00:00.000Z",
//       },
//   ],
//   itineraries: [
//     {
//       itineraryId: 1,
//       tourId: 1,
//       dayNumber: 1,
//       date: "2023-09-15T00:00:00.000Z",
//       destinationId: 1,
//       dailySchedules: [
//         {
//           scheduleId: 1,
//           itineraryId: 1,
//           timing: "09:00 AM",
//           activity: "Visit Ancient Temple",
//           place: "Temple A",
//         },
//         {
//           scheduleId: 1,
//           itineraryId: 1,
//           timing: "05:00  PM",
//           activity: "Play in the beach",
//           place: "Marina Beach",
//         },
//       ],
//     },
//     {
//       itineraryId: 2,
//       tourId: 1,
//       dayNumber: 2,
//       date: "2023-09-15T00:00:00.000Z",
//       destinationId: 2,
//       dailySchedules: [
//         {
//           scheduleId: 1,
//           itineraryId: 2,
//           timing: "09:00 AM",
//           activity: "Visit Ancient Temple",
//           place: "Temple A",
//         },
//       ],
//     },
//     {
//       itineraryId: 3,
//       tourId: 1,
//       dayNumber: 3,
//       date: "2023-09-15T00:00:00.000Z",
//       destinationId: 3,
//       dailySchedules: [
//         {
//           scheduleId: 1,
//           itineraryId: 3,
//           timing: "09:00 AM",
//           activity: "Visit Ancient Temple",
//           place: "Temple A",
//         },
//       ],
//     },
//   ],
//   tourDestination: [
//     {
//       id: 1,
//       tourId: 1,
//       destinationId: 1,
//       destinationimage: "https://example.com/images/destination1.jpg",
//       destinationActivity: "Historical Sites",
//     },
//     {
//       id: 4,
//       tourId: 1,
//       destinationId: 4,
//       destinationimage: "https://example.com/images/destination1.jpg",
//       destinationActivity: "Historical Sites",
//     },
//     {
//       id: 1,
//       tourId: 1,
//       destinationId: 7,
//       destinationimage: "https://example.com/images/destination1.jpg",
//       destinationActivity: "Historical Sites",
//     },
//   ],
//   tourInclusion: [
//     {
//       id: 1,
//       tourId: 1,
//       inclusionId: 101,
//     },
//     {
//       id: 1,
//       tourId: 1,
//       inclusionId: 102,
//     },
//     {
//       id: 1,
//       tourId: 1,
//       inclusionId: 103,
//     },
//   ],
//   tourExclusion: [
//     {
//       id: 1,
//       tourId: 1,
//       exclusionId: 101,
//     },
//   ],
// };

// const destinations = [
//   {
//     destinationId: 1,
//     destinationCityName: "Kolkata",
//     country: "India",
//     tourDestinations: null,
//   },
//   {
//     destinationId: 4,
//     destinationCityName: "Houston",
//     country: "USA",
//     tourDestinations: null,
//   },
//   {
//     destinationId: 7,
//     destinationCityName: "Los Vegas",
//     country: "USA",
//     tourDestinations: null,
//   },
//   {
//     destinationId: 9,
//     destinationCityName: "string",
//     country: "string",
//     tourDestinations: null,
//   },
// ];

// function BookingPage() {
//   const [booking, setBooking] = useState({
//     tourId: localStorage.getItem('tourId'),
//     userId:  localStorage.getItem('userId'),
//     bookingDate: new Date().toISOString(),
//     pickupPoint: "",
//     additionalRequests: "",
//     passengers: [
//       {
//         name: "",
//         age: "",
//         gender: "",
//       },
//     ],
//     payments: [
//       {
//         paymentDay: new Date().toISOString(),
//         paymentAmount: 0,
//         discountAmount: 0,
//         walletAmount: 0,
//         netPayableAmount: 0,
//         },
//     ],
//   });

// const handlePassengerChange = (index, field, value) => {
//     setBooking(prevBooking => {
//       const updatedPassengers = [...prevBooking.passengers];
//       updatedPassengers[index] = {
//         ...updatedPassengers[index],
//         [field]: value
//       };
//       return {
//         ...prevBooking,
//         passengers: updatedPassengers
//       };
//     });
//   };
  


//   const getDestination = (id) => {
//     // console.log(id);
//     const inclusion = destinations.find((item) => item.destinationId === id);
//     return inclusion ? inclusion.destinationCityName : "";
//   };

//   const getDay = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString("en-US", { weekday: "long" });
//   };

//   const getMonthAbbreviation = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString("en-US", { month: "short" });
//   };

//   const getDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.getDate();
//   };

//   const getYear = (dateString) => {
//     const date = new Date(dateString);
//     return date.getFullYear();
//   };

//   const [quantity, setQuantity] = useState(1);

//   const newPrice = quantity * tour.tourPrice;

// const generatePassengerFields = () => {
//     return Array.from({ length: quantity }, (_, index) => (
//       <div key={index} style={{ marginBottom: '1rem' }}>
//             <h6>Person {index+1} Details</h6>
//         <Input
//           placeholder="Passenger Name"
//           value={booking.passengers[index]?.name || ''}
//           onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//         />
//         <Input
//           type="number"
//           placeholder="Age"
//           value={booking.passengers[index]?.age || ''}
//           onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//           style={{ margin: '1rem 0rem' }}
//         />
//         <Select
//           value={booking.passengers[index]?.gender || ''}
//           onChange={(value) => handlePassengerChange(index, 'gender', value)}
//           style={{ width: '150px' }}
//         >
//           <Select.Option value="">Select Gender</Select.Option>
//           <Select.Option value="male">Male</Select.Option>
//           <Select.Option value="female">Female</Select.Option>
//         </Select>
//       </div>
//     ));
//   };
  
  
  
//   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

//   useEffect(() => {
//     // Check if any passenger fields are empty
//     const allPassengerFieldsFilled = booking.passengers.every(
//       (passenger) =>
//         // passenger.name.trim() === '' ||
//         // passenger.age === '' ||
//         // passenger.gender === ''
//         passenger.name.trim() !== "" &&
//         passenger.age !== "" &&
//         passenger.gender !== ""
//     );
  
// //     setIsSubmitDisabled(anyPassengerEmpty);
// //   }, [booking.passengers]);
// setIsSubmitDisabled(!allPassengerFieldsFilled || !booking.pickupPoint);
// }, [booking.passengers, booking.pickupPoint]);
  
// useEffect(() => {
//     const initialPayments = [
//       {
//         paymentDay: new Date().toISOString(),
//         paymentAmount: newPrice,
//         discountAmount: 0,
//         walletAmount: 0,
//         netPayableAmount: newPrice,
//       },
//     ];

//     setBooking((prevBooking) => ({
//       ...prevBooking,
//       payments: initialPayments,
//     }));
//     setIsSuccessModalOpen(false); // Add this line to close the SuccessModal initially

//   }, []);

// //   const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);


// const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
// const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

//   const handleSubmit = () => {
//     console.log(booking);
//     setIsOTPModalOpen(false); // Close the OTPModal
//     setIsSuccessModalOpen(false);
//     // setIsOTPModalOpen(true); // Open the OTPModal

//   };



//   return (
//     <div style={{ backgroundColor: "#F5F5F5" }}>
//       <headers>
//         <Navbar />
//       </headers>
//       <div
//         className="search-main-pan"
//         id="tour-main-pan"
//         style={{ marginTop: "3.5rem" }}
//       >
//         <div
//           className="main-div-2"
//           id="tour-main-div-2"
//           style={{ marginTop: "3rem" }}
//         >
//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
//             <h1>{tour.tourName}</h1>
//             <h6>A tour to explore the prominent sites with a guide</h6>
//           </div>
//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
//             <h3>Passenger Details</h3>
//             <h6>Please fill all the fields .</h6>
//               {generatePassengerFields()}
//           </div>
//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
//             <h3>Additional Details</h3>
// <Select
//   value={booking.pickupPoint}
//   onChange={(value) => setBooking({ ...booking, pickupPoint: value })}
//   style={{ width: '100%', margin: '1rem 0rem' }}
// >
//   <Select.Option value="">Select Pickup Point</Select.Option>
//   {tour.pickupPoints.map((point) => (
//     <Select.Option key={point.pickupPointId} value={point.location}>
//       {point.location}
//     </Select.Option>
//   ))}
// </Select>

//       <Input
//         placeholder="Additional Requests"
//         type="text"
//         value={booking.additionalRequests || ''}
//         onChange={(value) => setBooking({ ...booking, additionalRequests: value.target.value })}
//         style={{ width: '100%', margin: '1rem 0rem' }}
//       />
//           </div>
//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
//             <h2>Destinations</h2>
//             <div
//               className="dest-main"
//               style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
//             >
//               {tour.tourDestination.map((option) => (
//                 <div
//                   style={{
//                     width: "6rem",
//                     height: "2.4rem",
//                     padding: "0.4rem",
//                     border: "2px solid gray",
//                     borderRadius: "3rem",
//                     textAlign: "center",
//                   }}
//                 >
//                   {getDestination(option.destinationId)}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-2">
//             <div className="tour-mini-div-1">
//               <h4 style={{ color: "green" }}>
//                 {tour.cancellationPolicy} Cancellation Available
//               </h4>
//               <p>When cancelled more than 24 hours before the start time</p>
//             </div>
//           </div>

//           <div className="tour-div-1-filter-1" id="tour-main-div-filter-6">
//             <h4>Languages spoken by guide</h4>
//             <div
//               style={{
//                 width: "6rem",
//                 height: "2.4rem",
//                 padding: "0.4rem",
//                 border: "2px solid gray",
//                 borderRadius: "3rem",
//                 textAlign: "center",
//               }}
//             >
//               <h6>English</h6>
//             </div>
//           </div>
//         </div>
//         <div
//           className="main-div-1"
//           id="tour-main-div-1"
//           style={{ backgroundColor: "#fff", marginTop: "3rem" }}
//         >
//           <div
//             className="tour-div-1-filter-1"
//             style={{ paddingLeft: "0", paddingTop: "1rem" }}
//           >
//             <h2>Summary</h2>
//             <p style={{ fontSize: "1.3rem" }}></p>
//           </div>
//           <div
//             className="tour-div-1-filter-1"
//             style={{
//               display: "flex",
//               gap: "1rem",
//               flexWrap: "wrap",
//               alignItems: "center",
//               justifyContent: "space-between",
//               paddingLeft: "0",
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   border: "1px solid grey",
//                   textAlign: "center",
//                   borderRadius: "8px",
//                   height: "12rem",
//                   width: "12rem",
//                   backgroundImage: `url(${tour.imageUrl})`,
//                   backgroundPosition: "center",
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               ></div>
//             </div>
//             <div>
//               <h3>{tour.tourName}</h3>
//               <div>
//                 <p>
//                   {getDay(tour.departureDate)}, {getDate(tour.departureDate)}{" "}
//                   {getMonthAbbreviation(tour.departureDate)}
//                 </p>
//                 <p>{quantity} X Standard Ticket</p>
//                 <h4>$ {newPrice} /-</h4>
//               </div>
//             </div>
//           </div>
//           <div
//             className="tour-div-1-filter-1"
//             style={{ padding: "1rem", border: "1px solid gray" }}
//           >
//             <h4>{quantity} X Standard Ticket</h4>
//             <div
//               className="tour-div-1-filter-1"
//               style={{
//                 display: "flex",
//                 gap: "1rem",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "0",
//               }}
//             >
//               <div>
//                 <p>{quantity} X Person</p>
//               </div>
//               <div>
//                 <div class="input-group">
//                   <p>${newPrice}</p>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="tour-div-1-filter-1"
//               style={{
//                 display: "flex",
//                 gap: "1rem",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginTop: "0",
//                 paddingTop: "0",
//               }}
//             >
//               <div>
//                 <div>
//                   <span>Total Price</span>
//                 </div>
//               </div>
//               <div>
//                 <h5>${newPrice}</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="submit-button" style={{width:"90%",margin:"auto" }}>
//         <Button type="primary" onClick={handleSubmit} disabled={isSubmitDisabled} style={{width:"100%",height:"3rem"}}>
//           <h4>Book</h4>
//         </Button>

//         </div>
//         {isOTPModalOpen && (
//         <BookingOTPModal onClose={() => setIsOTPModalOpen(false)} />
//       )}

//       <SuccessModal
//         isVisible={isSuccessModalOpen}
//         onClose={() => setIsSuccessModalOpen(false)}
//       />
//       <footer style={{ marginTop: "3rem" }}>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default BookingPage;

