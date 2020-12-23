import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export const Services = () => {
  return (
    <section id="services">
      <h2 className="services-heading">Services</h2>
      <div className="services-container">
        <div className="service">
          <FaCocktail className="reactIcon cocktail" />
          <h2 className="service-heading">Free Cocktails</h2>
          <p className="service-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            qui at. Esse blanditiis quae perspiciatis dolores qui architecto
            pariatur quas!
          </p>
        </div>
        <div className="service">
          <FaHiking className="reactIcon hiking" />
          <h2 className="service-heading">Endless Hiking</h2>
          <p className="service-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            impedit quis sunt sequi amet natus assumenda officiis mollitia optio
            omnis?
          </p>
        </div>
        <div className="service">
          <FaShuttleVan className="reactIcon shuttle" />
          <h2 className="service-heading">Free Shuttle</h2>
          <p className="service-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
            qui at. Esse blanditiis quae perspiciatis dolores qui architecto
            pariatur quas!
          </p>
        </div>
        <div className="service">
          <FaBeer className="reactIcon beer" />
          <h2 className="service-heading">Strongest Beer</h2>
          <p className="service-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            praesentium itaque eaque veritatis aperiam aliquam sed ullam,
            molestiae impedit commodi.
          </p>
        </div>
      </div>
    </section>
  );
};
