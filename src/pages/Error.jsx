import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section id="error">
      <h1 className="error-heading">404 Page Not found</h1>
      <Link to="/">
        <button className="btn">Rooms</button>
      </Link>
    </section>
  );
};
