import { data } from "../data";

export const featuredRooms = data.filter((item) => {
  return item.fields.featured === true;
});

export const allRooms = data.map((item) => {
  return item;
});

const types = data.map((item) => {
  return item.fields.type;
});

let capacity = data.map((item) => item.fields.capacity);
capacity = Math.max(...capacity);

export const capacityArr = Array.from({ length: capacity }, (_, index) => {
  return index + 1;
});

const prices = data.map((item) => item.fields.price);
export const maxPrice = Math.max(...prices);

export const uniqueTypes = ["all", ...new Set(types)];
