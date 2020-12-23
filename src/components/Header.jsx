import React from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <figure className="header-logo">
          <FaUmbrellaBeach className="reactIcon beach" />
          <span className="header-heading">Charlton Noir - Beach Resort</span>
        </figure>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/rooms">
            <li>Rooms</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
