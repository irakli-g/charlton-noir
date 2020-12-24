import { allRooms } from "../utils/helpers";

const initialState = {
  filtered_rooms: allRooms,
  all_rooms: allRooms,
  type: "all",
  guests: 1,
  pets: false,
  breakfast: false,
};

export const filters_reduer = (state = initialState, action) => {
  if (action.type === "UPDATE_FILTER") {
    const { property, value } = action.payload;
    console.log(property, value);
    return {
      ...state,
    };
  }
  return {
    ...state,
  };
};
