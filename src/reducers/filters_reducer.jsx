import { allRooms } from "../utils/helpers";
import { maxPrice } from "../utils/helpers";

const initialState = {
  filtered_rooms: allRooms,
  all_rooms: allRooms,
  filters: {
    type: "all",
    guests: 1,
    pets: false,
    breakfast: false,
    min_price: 0,
    max_price: maxPrice,
    price: maxPrice,
  },
};

export const filters_reduer = (state = initialState, action) => {
  if (action.type === "UPDATE_FILTER") {
    const { property, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [property]: value,
      },
    };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { type, guests, pets, breakfast, price } = state.filters;
    let temporaryRooms = state.all_rooms;

    if (type !== "all") {
      temporaryRooms = temporaryRooms.filter(
        (item) => item.fields.type === type
      );
    }
    if (pets) {
      temporaryRooms = temporaryRooms.filter(
        (item) => item.fields.pets === true
      );
    }
    if (breakfast) {
      temporaryRooms = temporaryRooms.filter(
        (item) => item.fields.breakfast === true
      );
    }
    if (guests > 1) {
      temporaryRooms = temporaryRooms.filter(
        (item) => item.fields.capacity >= guests
      );
    }
    if (price) {
      temporaryRooms = temporaryRooms.filter(
        (item) => item.fields.price <= price
      );
    }
    return {
      ...state,
      filtered_rooms: temporaryRooms,
    };
  }
  return {
    ...state,
  };
};
