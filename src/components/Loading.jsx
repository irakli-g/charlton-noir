import React from "react";
import loading from "../images/200.gif";

const Loading = () => {
  return (
    <section id="loading">
      <figure className="loading-gif">
        <img src={loading} alt="loading gif" />
      </figure>
    </section>
  );
};

export default Loading;
