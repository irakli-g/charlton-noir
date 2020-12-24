import { combineReducers } from "redux";
import { rooms_reducer } from "./rooms_reducer";
import { filters_reduer } from "./filters_reducer";

export const rootReducer = combineReducers({
  rooms: rooms_reducer,
  filters: filters_reduer,
});
