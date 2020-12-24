import React from "react";
import { Link } from "react-router-dom";

export const RoomsShowcase = () => {
  return (
    <section id="roomsShowcase">
      <div className="roomsShowcase-content">
        <h1 className="roomsShowcase-heading">Our Rooms</h1>
        <Link to="/">
          <button className="btn">Return Home</button>
        </Link>
      </div>
    </section>
  );
};
