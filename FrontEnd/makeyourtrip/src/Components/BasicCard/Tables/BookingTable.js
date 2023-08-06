import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./BookingTable.css";

function BookingTable() {
  //   const navigate = useNavigate();
  const [Bookings, setBookings] = useState([]);
  const userId = 3;
  var GetAllBranches = () => {
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
    GetAllBranches();
  }, []);

  const filtered = Bookings.filter((b) => b.userId === userId);
  console.log(filtered);

  //   const deleteBooking = (bookingId) => {
  //     if (window.confirm("Are you sure you want to delete this booking?")) {
  //       // let JwtToken = localStorage.getItem("token");
  //       fetch(
  //         `http://localhost:5027/api/Booking/DeleteBooking?id=${bookingId}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             accept: "text/plain",
  //             // Authorization: "Bearer " + JwtToken,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //         .then(async (data) => {
  //           var myData = await data.json();
  //           console.log(myData);
  //           toast.success("Booking Deleted Successfully");
  //         })
  //         .catch((err) => {
  //           console.log(err.error);
  //         });
  //     }
  //   };



  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">
          Your Bookings
        </h5>

        {/* <div className="Org-Dash-admin-pan"> */}
        <div className="Org-Dash-patient-table">
          <table className="Org-Dash-fl-table">
            <thead>
              <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Tour ID</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Booking Status</th>
                <th scope="col">View</th>
                <th scope="col">Feedback</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr id="col">
                  <td colSpan="7">No data available</td>
                </tr>
              ) : (
                filtered.map((option) => (
                  <tr key={option.bookingId}>
                    <td>{option.bookingId}</td>
                    <td>{option.tourId}</td>
                    <td>{option.bookingDate}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          option.bookingStatus === "Completed"
                            ? "success"
                            : option.bookingStatus === "Pending"
                            ? "warning"
                            : "danger"
                        }`}
                        style={{width:"5rem",height:"1.5rem",textAlign:"center",padding:"0.35rem"}}
                      >
                        {option.bookingStatus}
                      </span>
                    </td>
                    <td>
                      <button className="my-btn my-btn-green">View</button>
                    </td>
                    <td>
                      <button className="my-btn  my-btn-blue">Feedback</button>
                    </td>
                    <td>
                      <button className="my-btn  my-btn-red">Cancel</button>
                    </td>
                  </tr>
                ))
              )}
              {/* {filtered.map((option) => (
            <tr key={option.bookingId}>
              <th scope="row">
                {option.tourId}
              </th>
              <td>{option.bookingDate}</td>
              <td>
              <span
                  className={`badge bg-${
                    option.bookingStatus === "Completed"
                      ? "success"
                      : option.bookingStatus === "Pending"
                      ? "warning"
                      : "danger"
                  }`}
                >
                  {option.bookingStatus}
                </span>
              </td>
              <td>
                
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    //   </div>
  );
}

export default BookingTable;
