import { allRooms, featuredRooms } from "../utils/Rooms";

const initialState = {
  all_rooms: allRooms,
  featured_rooms: featuredRooms,
};

export const rooms_reducer = (state = initialState, action) => {
  return {
    ...state,
  };
};
