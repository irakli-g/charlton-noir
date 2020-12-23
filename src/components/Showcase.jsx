import React from "react";
import { Link } from "react-router-dom";

export const Showcase = () => {
  return (
    <section id="showcase">
      <div className="showcase-content">
        <h1 className="showcase-content-heading">Luxurious Rooms</h1>
        <h2 className="showcase-content-subheading">
          Deluxe Rooms Starting At <span className="price">$ 299</span>
        </h2>
        <Link to="/rooms">
          <button className="btn">Our Rooms</button>
        </Link>
      </div>
    </section>
  );
};
