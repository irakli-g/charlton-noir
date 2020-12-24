import React from "react";
import Filters from "../components/Filters";
import { Room } from "../components/Room";
import { RoomsShowcase } from "../components/RoomsShowcase";
import { connect } from "react-redux";

const Rooms = ({ filteredRooms }) => {
  return (
    <main id="rooms">
      <RoomsShowcase />
      <Filters />
      <section id="rooms-container">
        {filteredRooms.map((item, index) => {
          return <Room key={index} {...item} />;
        })}
      </section>
      {filteredRooms.length < 1 && (
        <h2 className="noMatch-heading">No rooms match your search.</h2>
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  const filteredRooms = state.filters.filtered_rooms;
  return {
    filteredRooms,
  };
};

export default connect(mapStateToProps)(Rooms);
