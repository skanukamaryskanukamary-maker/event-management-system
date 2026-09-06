import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import { Link, useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { events, setEvents, setEditingEvent } =
    useContext(EventContext);

  const handleDelete = (id) => {
    const updatedEvents = events.filter(
      (event) => event.id !== id
    );

    setEvents(updatedEvents);
    alert("Event Deleted Successfully!");
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    navigate("/add-event");
  };

  const filteredEvents = events.filter((event) => {
    const matchTitle = (event.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "" ||
      (event.category || "") === category;

    return matchTitle && matchCategory;
  });

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>
        Upcoming Events
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Event..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          display: "block",
          margin: "20px auto",
          borderRadius: "5px",
        }}
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          display: "block",
          margin: "10px auto 20px",
          borderRadius: "5px",
        }}
      >
        <option value="">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
        <option value="Education">Education</option>
        <option value="Business">Business</option>
      </select>

      {filteredEvents.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No Events Available
        </p>
      ) : (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            style={{
              width: "550px",
              margin: "20px auto",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Event Image */}
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  background: "#f2f2f2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  marginBottom: "15px",
                  color: "#777",
                }}
              >
                No Image
              </div>
            )}

            <h2>{event.title}</h2>
            

            <p>
              <strong>Category:</strong>{" "}
              {event.category}
            </p>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Venue:</strong> {event.venue}
            </p>

            <p>
              <strong>Price:</strong> ₹{event.price}
            </p>

            <p>
  <strong>Description:</strong> {event.description}
</p>
            

            <div style={{ marginTop: "20px" }}>
              <Link to="/booking">
                <button
                  style={{
                    padding: "10px 20px",
                    background: "#27ae60",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Book Now
                </button>
              </Link>

              <button
                onClick={() => handleEdit(event)}
                style={{
                  marginLeft: "10px",
                  padding: "10px 20px",
                  background: "orange",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(event.id)}
                style={{
                  marginLeft: "10px",
                  padding: "10px 20px",
                  background: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;