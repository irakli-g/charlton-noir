import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach } from "react-icons/fa";

export const Header = () => {
  const [position, setPosition] = useState("static");
  const header = useRef();

  const logStats = () => {
    const rect = header.current.getBoundingClientRect().y;
    const scroll = window.scrollY;
    if (-rect > 100 && scroll > -rect - 1) {
      setPosition("fixed");
    }
    if (scroll < 5) {
      setPosition("static");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", logStats);
    return () => {
      window.removeEventListener("scroll", logStats);
    };
  }, [position]);
  return (
    <header
      className={
        position === "fixed" ? "main-navigation fixed" : "main-navigation"
      }
      ref={header}
    >
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
