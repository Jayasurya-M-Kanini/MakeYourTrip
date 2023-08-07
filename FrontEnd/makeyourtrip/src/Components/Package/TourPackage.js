import React, { useState } from "react";



function TourPackage() {
const [daysCount, setDaysCount] = useState(1);
const [inclusions, setInclusions] = useState([]);
const [exclusions, setExclusions] = useState([]);
  const [tourPackage, setTourPackage] = useState({
    tourId: 0,
    travelAgentId: localStorage.getItem("userId"),
    tourName: "",
    tourDescription: "",
    tourType: "",
    departureDate: "",
    returnDate: "",
    tourPrice: 0,
    maxCapacity: 0,
    bookedCapacity: 0,
    availability: "",
    imageUrl: "",
    accomodationStatus: "",
    cancellationPolicy: "",
    bookingRestriction: 0,
    healthAndSafety: "",
    pickupPoints: [
      {
        pickupPointId: 0,
        tourId: 0,
        location: "",
        pickupTime: "",
      },
    ],
    itineraries: [
      {
        itineraryId: 0,
        tourId: 0,
        dayNumber: 0,
        date: "",
        destinationId: 0,
        dailySchedules: [
          {
            scheduleId: 0,
            itineraryId: 0,
            timing: "",
            activity: "",
            place: "",
          },
        ],
      },
    ],
    tourDestination: [
      {
        id: 0,
        tourId: 0,
        destinationId: 0,
        destinationimage: "",
        destinationActivity: "",
      },
    ],
    tourInclusion: [
      {
        id: 0,
        tourId: 0,
        inclusionId: 1,
      },
    ],
    tourExclusion: [
      {
        id: 0,
        tourId: 0,
        exclusionId: 1,
      },
    ],
  });

  const handleInputChange = (itineraryIndex,field, value) => {
    const updatedTourItinerary = [...tourPackage.itineraries];
    updatedTourItinerary[itineraryIndex] = {
      ...updatedTourItinerary[itineraryIndex],
      [field]: value,
    };
    setTourPackage({ ...tourPackage, itineraries: updatedTourItinerary });
  };

//   const handleInputChange = (field, value) => {
//     setTourPackage({ ...tourPackage, [field]: value });
//   };

  const handleCountChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    // setDaysCount(newCount);
    // setTourPackage({ ...tourPackage, numberOfDays: newCount });
    const newTourItinerary = Array.from({ length: newCount }, () => ({
    //   title: "",
    //   itineraries: [
    //     {
    //       activityTitle: "",
    //       activityDescription: "",
    //       location: "",
    //     },
    //   ],
    //   accommodation: {
    //     hotelName: "",
    //     address: "",
    //   },
    dayNumber: 0,
    date: "",
    destinationId: 0,
    dailySchedules: [
        {
          scheduleId: 0,
          timing: "",
          activity: "",
          place: ""
        }
      ]
    }));
    setTourPackage({
      ...tourPackage,
    //   numberOfDays: newCount,
    itineraries: newTourItinerary,
    });
  };

  const handleAddPickupPoint = () => {
    const newPickupPoints = [...tourPackage.pickupPoints];
    newPickupPoints.push({
      pickupPointId: 0,
      tourId: 0,
      location: "",
      pickupTime: "",
    });
    setTourPackage({ ...tourPackage, pickupPoints: newPickupPoints });
  };

  const handleDeletePickupPoint = (index) => {
    const updatedPickupPoints = tourPackage.pickupPoints.filter(
      (_, i) => i !== index
    );
    setTourPackage({ ...tourPackage, pickupPoints: updatedPickupPoints });
  };

  const handlePickupPointChange = (index, field, value) => {
    const updatedPickupPoints = [...tourPackage.pickupPoints];
    updatedPickupPoints[index][field] = value;
    setTourPackage({ ...tourPackage, pickupPoints: updatedPickupPoints });
  };

  const renderPickupPoints = () => {
    return tourPackage.pickupPoints.map((pickupPoint, index) => (
      <div key={index} className="tourPickupPoint">
        <div>
          <h3>Pickup Point {index + 1}</h3>
        </div>
        <div className="tourPickupPointDetails">
          <div>
            <label className="addTourInputLabel">Location:</label>
            <input
              type="text"
              className="addTourInputField"
              value={pickupPoint.location}
              onChange={(e) =>
                handlePickupPointChange(index, "location", e.target.value)
              }
            />
          </div>
          <div>
            <label className="addTourInputLabel">Pickup Time:</label>
            <input
              type="date"
              className="addTourInputField"
              value={pickupPoint.pickupTime}
              onChange={(e) =>
                handlePickupPointChange(index, "pickupTime", e.target.value)
              }
            />
          </div>
          {tourPackage.pickupPoints.length > 1 && (
            <button
              onClick={() => handleDeletePickupPoint(index)}
              className="tourDataDeleteButton"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    ));
  };

//   Itineraries

const handleAddDailySchedule = (itineraryIndex) => {
    const newDailySchedules = [...tourPackage.itineraries[itineraryIndex].dailySchedules];
    newDailySchedules.push({
      scheduleId: 0,
      itineraryId: 0,
      timing: "",
      activity: "",
      place: "",
    });

    const updatedItineraries = [...tourPackage.itineraries];
    updatedItineraries[itineraryIndex].dailySchedules = newDailySchedules;

    setTourPackage({ ...tourPackage, itineraries: updatedItineraries });
  };

  const handleDeleteDailySchedule = (itineraryIndex, scheduleIndex) => {
    const updatedDailySchedules = [...tourPackage.itineraries[itineraryIndex].dailySchedules];
    updatedDailySchedules.splice(scheduleIndex, 1);

    const updatedItineraries = [...tourPackage.itineraries];
    updatedItineraries[itineraryIndex].dailySchedules = updatedDailySchedules;

    setTourPackage({ ...tourPackage, itineraries: updatedItineraries });
  };

  const handleDailyScheduleChange = (itineraryIndex, scheduleIndex, field, value) => {
    const updatedDailySchedules = [...tourPackage.itineraries[itineraryIndex].dailySchedules];
    updatedDailySchedules[scheduleIndex][field] = value;

    const updatedItineraries = [...tourPackage.itineraries];
    updatedItineraries[itineraryIndex].dailySchedules = updatedDailySchedules;

    setTourPackage({ ...tourPackage, itineraries: updatedItineraries });
  };

  const renderDailySchedules = (itineraryIndex) => {
    const dailySchedules = tourPackage.itineraries[itineraryIndex].dailySchedules;
    return dailySchedules.map((schedule, scheduleIndex) => (
      <div key={scheduleIndex} className="tourDailySchedule">
        <div>
          <h4>Daily Schedule {scheduleIndex + 1}</h4>
        </div>
        <div className="tourDailyScheduleDetails">
          <div>
            <label className="addTourInputLabel">Timing:</label>
            <input
              type="text"
              className="addTourInputField"
              value={schedule.timing}
              onChange={(e) =>
                handleDailyScheduleChange(itineraryIndex, scheduleIndex, "timing", e.target.value)
              }
            />
          </div>
          <div>
            <label className="addTourInputLabel">Activity:</label>
            <input
              type="text"
              className="addTourInputField"
              value={schedule.activity}
              onChange={(e) =>
                handleDailyScheduleChange(itineraryIndex, scheduleIndex, "activity", e.target.value)
              }
            />
          </div>
          <div>
            <label className="addTourInputLabel">Place:</label>
            <input
              type="text"
              className="addTourInputField"
              value={schedule.place}
              onChange={(e) =>
                handleDailyScheduleChange(itineraryIndex, scheduleIndex, "place", e.target.value)
              }
            />
          </div>
          {dailySchedules.length > 1 && (
            <button
              onClick={() => handleDeleteDailySchedule(itineraryIndex, scheduleIndex)}
              className="tourDataDeleteButton"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    ));
  };

//   const renderItineraries = () => {
//     return tourPackage.itineraries.map((itinerary, itineraryIndex) => (
//       <div key={itineraryIndex} className="tourItinerary">
//         <h3 className="dayNumber">Day {itineraryIndex+1}</h3>
//         <div>
//           <label className="addTourInputLable">DayNumber</label>
//           <input
//             type="text"
//             className="addTourInputField"
//             onChange={(e) => handleTitleChange(itineraryIndex, e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="addTourInputLable">date</label>
//           <input
//             type="text"
//             className="addTourInputField"
//             onChange={(e) => handleTitleChange(itineraryIndex, e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="addTourInputLable">destinationId</label>
//           <input
//             type="text"
//             className="addTourInputField"
//             onChange={(e) => handleTitleChange(itineraryIndex, e.target.value)}
//           />
//         </div>
//         <div className="tourDailySchedules">
//           <h4>Daily Schedules</h4>
//           {renderDailySchedules(itineraryIndex)}
//           <button
//             onClick={() => handleAddDailySchedule(itineraryIndex)}
//             className="tourDataAddButton"
//           >
//             Add Daily Schedule
//           </button>
//         </div>
//       </div>
//     ));
//   };

const renderItineraries = () => {
    return tourPackage.itineraries.map((itinerary, itineraryIndex) => (
      <div key={itineraryIndex} className="tourItinerary">
        <h3 className="dayNumber">Day {itineraryIndex + 1}</h3>
        <div>
          <label className="addTourInputLable">Day Number</label>
          <input
            type="number"
            className="addTourInputField"
            value={itinerary.dayNumber}
            onChange={(e) =>
              handleInputChange(itineraryIndex, "dayNumber", e.target.value)
            }
          />
        </div>
        <div>
          <label className="addTourInputLable">Date</label>
          <input
            type="date"
            className="addTourInputField"
            value={itinerary.date}
            onChange={(e) =>
              handleInputChange(itineraryIndex, "date", e.target.value)
            }
          />
        </div>
        <div>
          <label className="addTourInputLable">Destination ID</label>
          <input
            type="number"
            className="addTourInputField"
            value={itinerary.destinationId}
            onChange={(e) =>
              handleInputChange(itineraryIndex, "destinationId", e.target.value)
            }
          />
        </div>
        <div className="tourDailySchedules">
          <h4>Daily Schedules</h4>
          {renderDailySchedules(itineraryIndex)}
          <button
            onClick={() => handleAddDailySchedule(itineraryIndex)}
            className="tourDataAddButton"
          >
            Add Daily Schedule
          </button>
        </div>
      </div>
    ));
  };



//   tourDestinations

const handleAddTourDestination = () => {
    const newTourDestinations = [...tourPackage.tourDestination];
    newTourDestinations.push({
      id: 0,
      tourId: 0,
      destinationId: 0,
      destinationimage: "",
      destinationActivity: "",
    });

    setTourPackage({ ...tourPackage, tourDestination: newTourDestinations });
  };

  const handleDeleteTourDestination = (destinationIndex) => {
    const updatedTourDestinations = [...tourPackage.tourDestination];
    updatedTourDestinations.splice(destinationIndex, 1);

    setTourPackage({ ...tourPackage, tourDestination: updatedTourDestinations });
  };

  const handleTourDestinationChange = (destinationIndex, field, value) => {
    const updatedTourDestinations = [...tourPackage.tourDestination];
    updatedTourDestinations[destinationIndex][field] = value;

    setTourPackage({ ...tourPackage, tourDestination: updatedTourDestinations });
  };

  const renderTourDestinations = () => {
    return tourPackage.tourDestination.map((destination, destinationIndex) => (
      <div key={destinationIndex} className="tourDestination">
        <h3>Destination {destinationIndex + 1}</h3>
        <div className="tourDestinationDetails">
            <div>
            <label className="addTourInputLabel">Destination Id:</label>
            <input
              type="number"
              className="addTourInputField"
              value={destination.destinationId}
              onChange={(e) =>
                handleTourDestinationChange(
                  destinationIndex,
                  "destinationId",
                  e.target.value
                )
              }
            />
          </div>
          <div>
            <label className="addTourInputLabel">Destination Image:</label>
            <input
              type="text"
              className="addTourInputField"
              value={destination.destinationimage}
              onChange={(e) =>
                handleTourDestinationChange(
                  destinationIndex,
                  "destinationimage",
                  e.target.value
                )
              }
            />
          </div>
          <div>
            <label className="addTourInputLabel">Destination Activity:</label>
            <input
              type="text"
              className="addTourInputField"
              value={destination.destinationActivity}
              onChange={(e) =>
                handleTourDestinationChange(
                  destinationIndex,
                  "destinationActivity",
                  e.target.value
                )
              }
            />
          </div>
          {tourPackage.tourDestination.length > 1 && (
            <button
              onClick={() => handleDeleteTourDestination(destinationIndex)}
              className="tourDataDeleteButton"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    ));
  };

//   tourInclusions

// const handleAddInclusion = () => {
//     const newInclusions = [...tourPackage.inclusions];
//     newInclusions.push({ id: 0, tourId: 0, inclusionId: 0 });
//     setInclusions({...tourPackage, inclusion:newInclusions});
//   };

//   const handleDeleteInclusion = (index) => {
//     const updatedInclusions = inclusions.filter((_, i) => i !== index);
//     setInclusions(updatedInclusions);
//   };

//   const handleInclusionIdChange = (index, value) => {
//     const updatedInclusions = [...inclusions];
//     updatedInclusions[index].inclusionId = value;
//     setInclusions(updatedInclusions);
//   };

// const handleAddInclusion = () => {
//     const newInclusions = [...inclusions];
//     newInclusions.push({ id: 0, tourId: 0, inclusionId: 0 });
//     setInclusions(newInclusions);
//   };
  
//   const handleDeleteInclusion = (index) => {
//     const updatedInclusions = inclusions.filter((_, i) => i !== index);
//     setInclusions(updatedInclusions);
//   };
  
//   const handleInclusionIdChange = (index, value) => {
//     const updatedInclusions = [...inclusions];
//     updatedInclusions[index].inclusionId = value;
//     setInclusions(updatedInclusions);
//   };

//   const renderInclusions = () => {
//     return inclusions.map((inclusion, index) => (
//       <div key={index} className="tourInclusion">
//         <div>
//           <h3>Inclusion {index + 1}</h3>
//         </div>
//         <div className="tourInclusionDetails">
//           <div>
//             <label className="addTourInputLable">Inclusion ID:</label>
//             <input
//               type="number"
//               className="addTourInputField"
//               value={inclusion.inclusionId}
//               onChange={(e) => handleInclusionIdChange(index, e.target.value)}
//             />
//           </div>
//           {inclusions.length > 1 && (
//             <button
//               onClick={() => handleDeleteInclusion(index)}
//               className="tourDataDeleteButton"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//          ));
//   };

const handleAddInclusion = () => {
    const newInclusions = [...tourPackage.tourInclusion];
    newInclusions.push({ inclusionId: 0 });
    setTourPackage({ ...tourPackage, tourInclusion: newInclusions });
  };

  const handleDeleteInclusion = (index) => {
    const updatedInclusions = tourPackage.tourInclusion.filter(
      (_, i) => i !== index
    );
    setTourPackage({ ...tourPackage, tourInclusion: updatedInclusions });
  };

  const handleInclusionChange = (index, value) => {
    const updatedInclusions = [...tourPackage.tourInclusion];
    updatedInclusions[index].inclusionId = value;
    setTourPackage({ ...tourPackage, tourInclusion: updatedInclusions });
  };

  const renderInclusions = () => {
    return tourPackage.tourInclusion.map((inclusion, index) => (
      <div key={index} className="tourInclusions">
        <div>
          <label className="addTourInputLable">inclusion {index + 1}</label>
          <input
		type="number"
            className="addTourInputField"
            value={inclusion.inclusionId}
            onChange={(e) => handleInclusionChange(index, e.target.value)}
          />
        </div>
        <div>
          {tourPackage.tourInclusion.length > 1 && (
            <button
              onClick={() => handleDeleteInclusion(index)}
              className="tourDataDeleteButton"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    ));
  };


//   tourExclusions

//   const handleAddExclusion = () => {
//     const newExclusions = [...exclusions];
//     newExclusions.push({ id: 0, tourId: 0, exclusionId: 0 });
//     setExclusions(newExclusions);
//   };

//   const handleDeleteExclusion = (index) => {
//     const updatedExclusions = exclusions.filter((_, i) => i !== index);
//     setExclusions(updatedExclusions);
//   };

//   const handleExclusionIdChange = (index, value) => {
//     const updatedExclusions = [...exclusions];
//     updatedExclusions[index].exclusionId = value;
//     setExclusions(updatedExclusions);
//   };

// const handleAddExclusion = () => {
//     const newExclusions = [...exclusions];
//     newExclusions.push({ id: 0, tourId: 0, exclusionId: 0 });
//     setExclusions(newExclusions);
//   };
  
//   const handleDeleteExclusion = (index) => {
//     const updatedExclusions = exclusions.filter((_, i) => i !== index);
//     setExclusions(updatedExclusions);
//   };
  
//   const handleExclusionIdChange = (index, value) => {
//     const updatedExclusions = [...exclusions];
//     updatedExclusions[index].exclusionId = value;
//     setExclusions(updatedExclusions);
//   };

//   const renderExclusions = () => {
//     return exclusions.map((exclusion, index) => (
//       <div key={index} className="tourExclusion">
//         <div>
//           <h3>Exclusion {index + 1}</h3>
//         </div>
//         <div className="tourExclusionDetails">
//           <div>
//             <label className="addTourInputLable">Exclusion ID:</label>
//             <input
//               type="number"
//               className="addTourInputField"
//               value={exclusion.exclusionId}
//               onChange={(e) => handleExclusionIdChange(index, e.target.value)}
//             />
//           </div>
//           {exclusions.length > 1 && (
//             <button
//               onClick={() => handleDeleteExclusion(index)}
//               className="tourDataDeleteButton"
//             >
//               Delete
//             </button>
//           )}
//         </div>
//       </div>
//     ));
//   };

const handleAddExclusion = () => {
    const newExclusions = [...tourPackage.tourExclusion];
    newExclusions.push({ exclusionId: "" });
    setTourPackage({ ...tourPackage, tourExclusion: newExclusions });
  };

  const handleDeleteExclusion = (index) => {
    const updatedExclusions = tourPackage.tourExclusion.filter(
      (_, i) => i !== index
    );
    setTourPackage({ ...tourPackage, tourExclusion: updatedExclusions });
  };

  const handleExclusionChange = (index, value) => {
    const updatedExclusions = [...tourPackage.tourExclusion];
    updatedExclusions[index].exclusionId = value;
    setTourPackage({ ...tourPackage, tourExclusion: updatedExclusions });
  };

  const renderExclusions = () => {
    return tourPackage.tourExclusion.map((exclusion, index) => (
      <div key={index} className="tourExclusions">
        <div>
          <label className="addTourInputLable">exclusion {index + 1}</label>
          <input
            className="addTourInputField"
            value={exclusion.exclusionId}
            onChange={(e) => handleExclusionChange(index, e.target.value)}
          />
        </div>
        <div>
          {tourPackage.tourExclusion.length > 1 && (
            <button
              onClick={() => handleDeleteExclusion(index)}
              className="tourDataDeleteButton"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    ));
  };

  const handleSubmit = () => {
    console.log(tourPackage);
    // Implement your fetch logic here
  };

  return (
    <div className="TourPackage">
              <div className="CreateTourHeader">
        <div>
          <h1>Create a tour package</h1>
        </div>
      </div>

      {/* normal-1 */}

      <div className="tourTitleDescription">
        <div className="inputLabelFlexContainer ">
          <label className="addTourInputLable">Tour Name</label>
          <input
            className="addTourInputField tourTitleInputField"
            type="text"
            placeholder="Title for tour"
            onChange={(e) =>
              setTourPackage({ ...tourPackage, tourName: e.target.value })
            }
          />
        </div>
        <div className="inputLabelFlexContainer">
          <label className="addTourInputLable ">Tour Description</label>
          <textarea
            className="addTourInputField tourDescription"
            type="text"
            placeholder="Tour description"
            onChange={(e) =>
              setTourPackage({ ...tourPackage, tourDescription: e.target.value })
            }
          />
        </div>
        <div className="inputLabelFlexContainer">
          <label className="addTourInputLable">Accommodation Status</label>
          <select
            className="addTourInputField"
            onChange={(e) =>
              setTourPackage({
                ...tourPackage,
                accomodationStatus: e.target.value,
              })
            }
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* normal-2 */}

      <div className="tourTitleDescription">
        <div className="inputLabelFlexContainer">
          <label className="addTourInputLable">Tour Type</label>
          <input
          type="text"
            className="addTourInputField"
            onChange={(e) =>
              setTourPackage({ ...tourPackage, tourType: e.target.value })
            }
          >
          </input>
        </div>
        <div className="inputLabelFlexContainer">
          <label className="addTourInputLable">Tour Price </label>
          <input
            className="addTourInputField"
            type="number"
            placeholder="Tour Price"
            onChange={(e) =>
              setTourPackage({ ...tourPackage, tourPrice: e.target.value })
            }
          />
        </div>
        <div className="inputLabelFlexContainer ">
          <label className="addTourInputLable">Number of Days</label>
          <input
            className="addTourInputField"
            type="number"
            min="1"
            // value={daysCount}
            onChange={handleCountChange}
          />
        </div>
        <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Departure Date:</label>
        <input
          className="addTourInputField"
          type="date"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, departureDate: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Return Date:</label>
        <input
          className="addTourInputField"
          type="date"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, returnDate: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Maximum capacity: </label>
        <input
          className="addTourInputField"
          type="number"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, maxCapacity: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Booked capacity: </label>
        <input
          className="addTourInputField"
          type="number"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, bookedCapacity: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Availability: </label>
        <input
          className="addTourInputField"
          type="text"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, availability: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Image: </label>
        <input
          className="addTourInputField"
          type="text"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, imageUrl: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Cancellation Policy : </label>
        <input
          className="addTourInputField"
          type="text"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, cancellationPolicy: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Booking Restriction : </label>
        <input
          className="addTourInputField"
          type="number"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, bookingRestriction: e.target.value })
          }        />
      </div>
      <div className="inputLabelFlexContainer">
        <label className="addTourInputLabel">Health & Safety : </label>
        <input
          className="addTourInputField"
          type="text"
          placeholder="Tour Name"
          onChange={(e) =>
            setTourPackage({ ...tourPackage, healthAndSafety: e.target.value })
          }        />
      </div>
      </div>


      <div className="inputLabelFlexContainer tourTitleDescription">
        {renderPickupPoints()}
        <button onClick={handleAddPickupPoint} className="tourDataAddButton">
          Add Pickup Point
        </button>
      </div>
      {/* Render other sections similarly */}
      <div className="inputLabelFlexContainer tourTitleDescription">
        <div className="inputLabelFlexContainer tourTitleDescription">
          <h2>Itineraries</h2>
          {renderItineraries()}
        </div>
      </div>
      {/* Render other sections similarly */}
    <div className="inputLabelFlexContainer tourTitleDescription">
        <div className="inputLabelFlexContainer tourTitleDescription">
          <h2>Tour Destinations</h2>
          {renderTourDestinations()}
          <button onClick={handleAddTourDestination} className="tourDataAddButton">
            Add Tour Destination
          </button>
        </div>
      </div>

    {/* Render other sections similarly */}

    <div className="inputLabelFlexContainer tourTitleDescription">
        <div className="inputLabelFlexContainer tourTitleDescription">
          <h2>Tour Inclusions</h2>
          {renderInclusions()}
          <button onClick={handleAddInclusion} className="tourDataAddButton">
            Add Inclusion
          </button>
        </div>
        <div className="inputLabelFlexContainer tourTitleDescription">
          <h2>Tour Exclusions</h2>
          {/* Render exclusions similarly */}
        {renderExclusions()}
          <button onClick={handleAddExclusion} className="tourDataAddButton">
            Add Exclusion
          </button>
        </div>
      </div>

      <div className="inputLabelFlexContainer tourTitleDescription">
        <button
          className="tourDetailsSubmitButton"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default TourPackage;
