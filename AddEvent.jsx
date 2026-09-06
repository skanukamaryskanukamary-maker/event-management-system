import { useState, useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";

function AddEvent() {
  const {
    events,
    setEvents,
    editingEvent,
    setEditingEvent,
  } = useContext(EventContext);

  const [event, setEvent] = useState({
    title: "",
    category: "",
    date: "",
    venue: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (editingEvent) {
      setEvent(editingEvent);
    }
  }, [editingEvent]);

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  // Image Upload
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setEvent((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEvent) {
      const updatedEvents = events.map((item) =>
        item.id === editingEvent.id
          ? { ...event, id: editingEvent.id }
          : item
      );

      setEvents(updatedEvents);
      setEditingEvent(null);

      alert("Event Updated Successfully!");
    } else {
      const newEvent = {
        id: Date.now(),
        ...event,
      };

      setEvents([...events, newEvent]);

      alert("Event Added Successfully!");
    }

    setEvent({
      title: "",
      category: "",
      date: "",
      venue: "",
      price: "",
      description: "",
      image: "",
    });
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        {editingEvent ? "Edit Event" : "Add Event"}
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={event.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={event.category}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={event.venue}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          value={event.price}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={event.description}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            height: "100px",
            resize: "none",
          }}
          required
        />

        <div style={{ marginBottom: "15px" }}>
          <label>
            <b>Event Image</b>
          </label>
          <br />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        {event.image && (
          <img
            src={event.image}
            alt="Preview"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
          />
        )}

        <button type="submit" style={buttonStyle}>
          {editingEvent ? "Update Event" : "Add Event"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#27ae60",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
};

export default AddEvent;