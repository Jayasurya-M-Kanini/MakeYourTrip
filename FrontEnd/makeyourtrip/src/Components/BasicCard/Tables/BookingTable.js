import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function BookingTable() {
  const navigate = useNavigate();
  const [Bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState({
    "userId":3
  }) // Set the userId you want to filter by

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
      const filtered = myData.filter(booking => booking.userId === userId);
      setBookings(filtered);
    });
  };

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


  useEffect(() => {
    let ignore = false;
    if (!ignore) GetAllBranches();
    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <div>
    <div className="card-body">
      <h5 className="card-title">
        Recent Tours <span>| Today</span>
      </h5>

      <table className="table table-borderless datatable">
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
          {agents.map((agent) => (
            <tr key={agent.agentId}>
              <th scope="row">
                <a href={`#${agent.agentId}`}>{agent.agentId}</a>
              </th>
              <td>{agent.agencyName}</td>
              <td>
                <a href={`mailto:${agent.emailId}`} className="text-primary">
                  {agent.emailId}
                </a>
              </td>
              <td>{agent.phoneNumber}</td>
              <td>
                <span
                  className={`badge bg-${
                    agent.status === "C"
                      ? "success"
                      : agent.status === "Pending"
                      ? "warning"
                      : "danger"
                  }`}
                >
                  {agent.status}
                </span>
              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default BookingTable;


