import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div id="events">
      <h3 className="mt-5 mb-3">Our Events and Package Offering Price</h3>
      <div className="event-container">
        {events.map((event) => (
          <Event event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
