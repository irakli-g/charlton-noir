import { data } from "../data";

export const featuredRooms = data.filter((item) => {
  return item.fields.featured === true;
});

export const allRooms = data.map((item) => {
  return item;
});
