import React from "react";
import { Showcase } from "../components/Showcase";
import { Services } from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export const Home = () => {
  return (
    <main>
      <Showcase />
      <Services />
      <FeaturedRooms />
    </main>
  );
};
