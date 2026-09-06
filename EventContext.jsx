import { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  // Edit Event State
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        editingEvent,
        setEditingEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;