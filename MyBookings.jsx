import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(data);
  }, []);

  return (
    <div className="my-bookings">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="no-bookings">No Bookings Found</p>
      ) : (
        bookings.map((booking, index) => (
          <div
            className="booking-card"
            key={index}
            onClick={() => navigate("/confirmation")}
          >
            <h2>{booking.name}</h2>

            <p>
              <span>Email :</span> {booking.email}
            </p>

            <p>
              <span>Phone :</span> {booking.phone}
            </p>

            <p>
              <span>Tickets :</span> {booking.tickets}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;