import { AiOutlineInfoCircle } from "react-icons/ai";
import Footer from "../Footer/Footer";
import "../LandingPage/LandingPage.css";
import Navbar from "../Navbar/Navbar";
import "./TourPage.css";
import { useState } from "react";

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

function TourPage() {
  const getInclusionName = (id) => {
    console.log(id);
    const inclusion = Inclusion.find((item) => item.inclusionId === id);
    return inclusion ? inclusion.inclusionDescription : "";
  };

  const getExclusionName = (id) => {
    console.log(id);
    const inclusion = Exclusions.find((item) => item.exclusionId === id);
    return inclusion ? inclusion.exclusionDescription : "";
  };

  const getDestination = (id) => {
    console.log(id);
    const inclusion = destinations.find((item) => item.destinationId === id);
    return inclusion ? inclusion.destinationCityName : "";
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
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

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < tour.bookingRestriction && quantity+tour.bookedCapacity < tour.maxCapacity) {
      setQuantity(quantity + 1);
    } else if (quantity+tour.bookedCapacity >= tour.maxCapacity) {
      alert("Maximum capacity reached");
    } else {
      alert("Booking restriction reached");
    }
  };

  const newPrice = quantity * tour.tourPrice;


  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <headers>
        <Navbar />
        <div
          class="search-hero-container"
          style={{
            height: "35rem",
            backgroundImage: `url(${tour.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        ></div>
      </headers>
      <div className="search-main-pan" id="tour-main-pan">
        <div className="main-div-2" id="tour-main-div-2">
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-1">
            <h1>{tour.tourName}</h1>
            <h6>A tour to explore the prominent sites with a guide</h6>
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
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-3">
            <div className="tour-mini-div-1" style={{ marginBottom: "1rem" }}>
              <h4>Why visit </h4>
              <li>Chance to explore with a professional guide</li>
              <li>Full-day tour to explore multiple sites</li>
            </div>
            <div className="tour-para">
              <p>
                On this tour, you will be able to explore the main attractions
                in Chennai. After getting picked up from your hotel, you will
                walk on the 3 km stretch of Marina Beach. Then, you will head to
                Mylapore, one of the most colourful neighbourhoods in Chennai.
                Here, you will also get a chance to see Kapaleeshwarar
                Temple.Then, you will visit a unique monastic organisation
                called Ramakrishna Math. Here, you will see the universal
                temple, the shrine, a beautiful Mandapam, a multimedia museum
                and a library.Next, you will visit the famous San Thome
                Basilica, the principal church of the Roman Catholic Archdiocese
                of Madras and Mylapore. Here, you will see one of only three
                churches in the world to have been constructed on the tomb of an
                apostle. Before the tour ends, you will see Fort St. George and
                St. Mary’s Church, the oldest Anglican church of India.
              </p>
            </div>
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-4">
            <div
              className="tour-inclusions-exclusions"
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div className="tour-inclusions">
                <h4>What's Included</h4>
                <div className="Inclusion-content">
                  {tour.tourInclusion.map((option) => (
                    <li className="green-bullet">
                      {getInclusionName(option.inclusionId)}
                    </li>
                  ))}
                </div>
              </div>
              <div className="tour-inclusions">
                <h4>What's Excluded</h4>
                <div className="Inclusion-content">
                  {tour.tourExclusion.map((option) => (
                    <li className="red-bullet">
                      {getExclusionName(option.exclusionId)}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-5">
            <h4>Health & safety</h4>
            <h6>{tour.healthAndSafety}</h6>
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
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-7">
            <h4>Additional Information</h4>
            <div>
              <li>Please bring your ticket with you to the attraction.</li>
              <li>
                Be aware that operators may cancel for unforeseen reasons.
              </li>
              <li>Operated by Wonder tours</li>
            </div>
          </div>
          <div className="tour-div-1-filter-1" id="tour-main-div-filter-8">
            <h4 style={{ marginBottom: "1rem" }}>Itinerary</h4>
            {tour.itineraries.map((itinerary, index) => (
              <div key={itinerary.itineraryId}>
                <button
                  className={`accordion ${
                    activeIndex === index ? "accordionactive" : ""
                  }`}
                  onClick={() => handleAccordionClick(index)}
                  //   style={{}}
                >
                  <h5>Day {itinerary.dayNumber}</h5>
                </button>
                <div
                  className={`tourpanel ${activeIndex === index ? "show" : ""}`}
                  style={{ marginTop: "0.45rem" }}
                >
                  <h6 style={{ color: "gray" }}>
                    {itinerary.dailySchedules.map((schedule) => (
                      <div
                        key={schedule.scheduleId}
                        style={{ paddingTop: "1rem" }}
                      >
                        <strong>{schedule.timing}</strong> - {schedule.activity}{" "}
                        at {schedule.place}
                      </div>
                    ))}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="main-div-1"
          id="tour-main-div-1"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="tour-div-1-filter-1"
            style={{ paddingLeft: "0", paddingTop: "1rem" }}
          >
            <h2>Tickets & Prices</h2>
            <p style={{ fontSize: "1.3rem" }}>
              Price ${tour.tourPrice}/- <span>Per Person</span>
            </p>
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
              <h3>Start Date</h3>
              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <h4>{getDay(tour.departureDate)}</h4>
                <h4>{getDate(tour.departureDate)}</h4>
                <h4>{getMonthAbbreviation(tour.departureDate)}</h4>
              </div>
            </div>
            <div>
              <h3>End Date</h3>
              <div
                style={{
                  border: "1px solid grey",
                  padding: "1rem",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                <h4>{getDay(tour.returnDate)}</h4>
                <h4>{getDate(tour.returnDate)}</h4>
                <h4>{getMonthAbbreviation(tour.returnDate)}</h4>
              </div>
            </div>
          </div>
          <div
            className="tour-div-1-filter-1"
            style={{ padding: "1rem", border: "1px solid gray" }}
          >
            <h4>Standard Ticket</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineInfoCircle size={26}></AiOutlineInfoCircle>
              <h6
                style={{
                  marginLeft: "0.7rem",
                  fontSize: "1.3rem",
                  marginTop: "0.4rem",
                }}
              >
                {tour.cancellationPolicy} Cancellation available
              </h6>
            </div>
            <h6 style={{marginTop:"1rem"}}>How many tickets ?</h6>
            <div
              className="tour-div-1-filter-1"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom:"0"
              }}
            >
              <div>
                <h3>Persons</h3>
                <div>
                  <h6>${newPrice}</h6>
                </div>
              </div>
              <div>
                <div class="input-group">
                  <input
                    type="button"
                    value="-"
                    class="button-minus"
                    data-field="quantity"
                    onClick={handleMinusClick}
                  />
                  <input
                    type="number"
                    step="1"
                    max=""
                    value={quantity}
                    name="quantity"
                    class="quantity-field"
                    readOnly
                  />
                  <input
                    type="button"
                    value="+"
                    class="button-plus"
                    data-field="quantity"
                    onClick={handlePlusClick}
                    disabled={
                        quantity >= tour.bookingRestriction || quantity+tour.bookedCapacity >= tour.maxCapacity
                      }
                  />
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
                marginTop:"0",
                paddingTop:"0"
              }}
            >
              <div>
                <div>
                  <span>Total</span>
                  <h5 >${newPrice}</h5>
                </div>
              </div>
              <div>
              <button className="my-btn" style={{marginRight:"0.85rem"}}>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ marginTop: "3rem" }}>
        <Footer />
      </footer>
    </div>
  );
}

export default TourPage;
