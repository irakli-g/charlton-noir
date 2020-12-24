import React from "react";
import { Link } from "react-router-dom";

const SingleRoomShowcase = ({ name, images }) => {
  const mainImg = images[0].fields.file.url;
  return (
    <section id="singleRoomShowcase">
      <img src={mainImg} alt={name} />
      <div className="singleRoomShowcase-content">
        <h1 className="singleRoomShowcase-heading">{name} Room</h1>
        <Link to="/rooms">
          <button className="btn">Back To Rooms</button>
        </Link>
      </div>
    </section>
  );
};

export default SingleRoomShowcase;
