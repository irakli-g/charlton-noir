import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FeaturedRooms = ({ featuredRooms }) => {
  return (
    <section id="featuredRooms">
      <h2 className="featuredRooms-heading">Feautred Rooms</h2>
      <div className="featuredRooms-container">
        {featuredRooms.map((item, index) => {
          const { price, slug, name, extras, images } = item.fields;
          //   console.log(images[0].fields.file.url);
          const imageUrl = images[0].fields.file.url;

          return (
            <div className="featuredRoom" key={index}>
              <div className="featuredRoom sideOne">
                <figure className="featuredRoom-image">
                  <img src={imageUrl} alt={name} />
                </figure>
                <h3 className="featuredRoom-heading">{name}</h3>
                <ul>
                  {extras.map((extra, index) => {
                    return <li key={index}>{extra}</li>;
                  })}
                </ul>
              </div>
              <div className="featuredRoom sideTwo">
                <h3 className="price">Price: ${price}</h3>
                <Link to={`/rooms/${slug}`}>
                  <button className="btn">Features</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    featuredRooms: state.rooms.featured_rooms,
  };
};

export default connect(mapStateToProps)(FeaturedRooms);
