import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Loading from "./components/Loading";
import Message from "./components/Message";
const Home = lazy(() => import("./pages/Home"));
const Rooms = lazy(() => import("./pages/Rooms"));
const SingleRoom = lazy(() => import("./pages/SingleRoom"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <Header />
      <Message />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="/rooms/:slug" exact element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
