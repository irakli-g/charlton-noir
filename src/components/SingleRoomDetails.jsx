import React from "react";
import { FiChevronRight } from "react-icons/fi";

export const SingleRoomDetails = ({
  price,
  size,
  capacity,
  pets,
  description,
  extras,
  images,
  name,
  breakfast,
}) => {
  const minorImages = images.slice(1, images.length);
  return (
    <section id="singleRoomDetails">
      <div className="singleRoomDetails-images">
        {minorImages.map((item, index) => {
          return <img src={item.fields.file.url} alt={name} key={index} />;
        })}
      </div>
      <div className="singleRoomDetails-content">
        <div className="singleRoomDetails-description">
          <h2 className="description-heading">Details</h2>
          <p className="description-content">{description}</p>
        </div>
        <div className="singleRoomDetails-info">
          <h2 className="info-heading">Info</h2>
          <h5 className="info-content">
            Price: <span>$ {Number(price).toFixed(2)}</span>
          </h5>
          <h5 className="info-content">
            Size: <span> {size} SQFT</span>
          </h5>
          <h5 className="info-content">
            Max Capacity: <span>{capacity} people</span>
          </h5>
          <h5 className="info-content">
            Pets {pets ? <span>Allowed</span> : <span>Not Allowed</span>}
          </h5>
          <h5 className="info-content">
            Free Breakfast:
            {breakfast ? <span>Included</span> : <span>Not Included</span>}
          </h5>
        </div>
      </div>
      <div className="singleRoomDetails-extras">
        <h2 className="extras-heading">Extras</h2>
        <ul>
          {extras.map((item, index) => {
            return (
              <li key={index}>
                <FiChevronRight className="reactIcon chevron" /> {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
