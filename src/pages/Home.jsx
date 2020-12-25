import React, { lazy, Suspense } from "react";
import { Showcase } from "../components/Showcase";
import { Services } from "../components/Services";
import Loading from "../components/Loading";
const FeaturedRooms = lazy(() => import("../components/FeaturedRooms"));

const Home = () => {
  return (
    <main>
      <Showcase />
      <Services />
      <Suspense fallback={<Loading />}>
        <FeaturedRooms />
      </Suspense>
    </main>
  );
};

export default Home;
