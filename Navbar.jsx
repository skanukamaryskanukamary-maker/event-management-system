import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2c3e50",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/events" style={linkStyle}>
        Events
      </Link>

      <Link to="/add-event" style={linkStyle}>
        Add Event
      </Link>

      <Link to="/my-bookings" style={linkStyle}>
        My Bookings
      </Link>

      <Link to="/dashboard" style={linkStyle}>
        Dashboard
      </Link>

      <Link to="/login" style={linkStyle}>
        Login
      </Link>

      <Link to="/register" style={linkStyle}>
        Register
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;