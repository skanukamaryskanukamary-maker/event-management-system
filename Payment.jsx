import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      payment.name === "" ||
      payment.card === "" ||
      payment.expiry === "" ||
      payment.cvv === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (payment.card.length !== 16) {
      alert("Card Number must be 16 digits.");
      return;
    }

    if (payment.cvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    alert("✅ Payment Successful!\nBooking Confirmed.");

    setPayment({
      name: "",
      card: "",
      expiry: "",
      cvv: "",
    });

    navigate("/confirmation");
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "40px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "25px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Payment
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Card Holder Name"
          value={payment.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="card"
          placeholder="Card Number"
          value={payment.card}
          onChange={handleChange}
          maxLength="16"
          style={inputStyle}
          required
        />

        <input
          type="month"
          name="expiry"
          value={payment.expiry}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          value={payment.cvv}
          onChange={handleChange}
          maxLength="3"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#27ae60",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
};

export default Payment;