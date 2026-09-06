import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      ...booking,
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    oldBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(oldBookings)
    );

    alert("🎉 Booking Successful!");

    setBooking({
      name: "",
      email: "",
      phone: "",
      tickets: 1,
    });

    // Go to Payment Page
    navigate("/payment");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Book Event</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={booking.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={booking.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={booking.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="number"
          name="tickets"
          placeholder="Number of Tickets"
          value={booking.tickets}
          onChange={handleChange}
          min="1"
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Booking;