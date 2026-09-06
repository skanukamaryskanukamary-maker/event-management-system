import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const { events } = useContext(EventContext);
  const navigate = useNavigate();

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const totalRevenue = bookings.reduce((total, booking) => {
    return total + Number(booking.tickets || 1) * 500;
  }, 0);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div
          className="card blue"
          onClick={() => navigate("/events")}
        >
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div
          className="card green"
          onClick={() => navigate("/my-bookings")}
        >
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>
        </div>

        <div
          className="card orange"
          onClick={() => navigate("/payment")}
        >
          <h2>₹{totalRevenue}</h2>
          <p>Total Revenue</p>
        </div>

        <div
          className="card purple"
          onClick={() => navigate("/events")}
        >
          <h2>{events.filter((e) => e.category === "Music").length}</h2>
          <p>Music Events</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;