import { combineReducers } from "redux";
import { rooms_reducer } from "./rooms_reducer";

export const rootReducer = combineReducers({
  rooms: rooms_reducer,
});
