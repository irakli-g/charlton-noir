import React, { useEffect } from "react";
import { connect } from "react-redux";
import { uniqueTypes } from "../utils/helpers";
import { capacityArr } from "../utils/helpers";

const Filters = ({ filters, dispatch }) => {
  const {
    type,
    guests,
    breakfast,
    pets,
    max_price,
    min_price,
    price,
  } = filters;

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [filters, dispatch]);

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
          <select
            name="guests"
            id="guests"
            value={guests}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_FILTER",
                payload: {
                  property: e.target.name,
                  value: Number(e.target.value),
                },
              });
            }}
          >
            {capacityArr.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price: $ {Number(price).toFixed(2)}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_FILTER",
                payload: {
                  property: e.target.name,
                  value: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="breakfast">Breakfast</label>
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            checked={breakfast}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTER",
                payload: {
                  property: e.target.name,
                  value: !breakfast,
                },
              })
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="pets">Pets</label>
          <input
            type="checkbox"
            id="pets"
            name="pets"
            checked={pets}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTER",
                payload: {
                  property: e.target.name,
                  value: !pets,
                },
              })
            }
          />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  const filters = state.filters.filters;
  return {
    filters,
  };
};

export default connect(mapStateToProps)(Filters);
