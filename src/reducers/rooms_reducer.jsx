import { allRooms, featuredRooms } from "../utils/helpers";

const initialState = {
  all_rooms: allRooms,
  featured_rooms: featuredRooms,
  single_room: [],
  isLoading: true,
};

export const rooms_reducer = (state = initialState, action) => {
  if (action.type === "GET_SINGLE_ROOM") {
    const slug = action.payload;
    let single_room = state.all_rooms.filter((item) => {
      return item.fields.slug === slug;
    });

    return {
      ...state,
      single_room,
      isLoading: false,
    };
  }
  return {
    ...state,
  };
};
