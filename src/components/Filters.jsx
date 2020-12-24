import React from "react";
import { connect } from "react-redux";
import { uniqueTypes } from "../utils/helpers";

const Filters = ({ filters, dispatch }) => {
  const type = filters.type;
  const guests = filters.guests;
  const pets = filters.pets;
  const breakfast = filters.breakfast;
  return (
    <section id="filters">
      <h2 className="filters-heading">Search Rooms</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_FILTER",
                payload: {
                  property: e.target.name,
                  value: e.target.value,
                },
              });
            }}
          >
            {uniqueTypes.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="guests">Guests</label>
          <select name="guests" id="guests"></select>
        </div>
        {/* <div className="form-control">
          <label htmlFor="price">Price</label>
          <input type="range" name="price" id="price" min="0" />
        </div> */}
        <div className="form-control">
          <label htmlFor="breakfast">Breakfast</label>
          <input type="checkbox" id="breakfast" name="breakfast" />
        </div>
        <div className="form-control">
          <label htmlFor="pets">Pets</label>
          <input type="checkbox" id="pets" name="pets" />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  const filters = state.filters;
  return {
    filters,
  };
};

export default connect(mapStateToProps)(Filters);
