import React from "react";
import { Link } from "react-router-dom";

export const Room = (props) => {
  const { name, price, slug, images } = props.fields;
  const mainImg = images[0].fields.file.url;
  return (
    <div className="room">
      <figure className="room-image">
        <img src={mainImg} alt={name} />
      </figure>
      <div className="room-info">
        <h2 className="room-name">{name}</h2>
        <span className="room-price"> $ {price}</span>
      </div>
      <Link to={`/rooms/${slug}`}>
        <button className="btn">Features</button>
      </Link>
    </div>
  );
};
