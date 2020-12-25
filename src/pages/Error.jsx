import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main id="error">
      <h1 className="error-heading">404 Page Not found</h1>
      <Link to="/rooms">
        <button className="btn">Rooms</button>
      </Link>
    </main>
  );
};

export default Error;
