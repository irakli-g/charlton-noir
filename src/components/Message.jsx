import React, { useState } from "react";

const messageState = () => {
  let status = sessionStorage.getItem("messageSeen");
  if (status !== null) {
    status = JSON.parse(sessionStorage.getItem("messageSeen"));
  } else {
    status = false;
  }
  return status;
};

const Message = () => {
  const [messageSeen, setMessageSeen] = useState(messageState());

  const closeMessage = () => {
    sessionStorage.setItem("messageSeen", true);
    setMessageSeen(true);
  };

  return (
    <section className={messageSeen ? "message" : "message show"}>
      <div className="message-container">
        <p>
          This App was created by Irakli Ghachava
          <a href="https://irakli-g.dev/" target="_blank" rel="noreferrer">
            irakli-g.dev
          </a>
          solely for presentational purposes and does not offer any goods or
          services. 👉
          <a
            href="https://github.com/irakli-g/meubles"
            target="_blank"
            rel="noreferrer"
          >
            source code
          </a>
        </p>
        <button className="btn" onClick={() => closeMessage()}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Message;
