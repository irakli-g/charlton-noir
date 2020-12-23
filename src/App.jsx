import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { SingleRoom } from "./pages/SingleRoom";
import { Error } from "./pages/Error";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rooms" exact element={<Rooms />} />
        <Route path="/rooms/:slug" exact element={<SingleRoom />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
