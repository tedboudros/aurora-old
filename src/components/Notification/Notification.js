import React from "react";
import Error from "./icons/error.svg";
import Warning from "./icons/warning.svg";
import Success from "./icons/success.svg";
import "./Notification.css";

const Notification = props => {
  const { type, message } = props;
  return (
    <div className="notification">
      <img
        src={type === "error" ? Error : type === "warning" ? Warning : Success}
        alt="notification_pic"
        className={"notification_pic"}
      />
      <span className="notification_text">{message}</span>
    </div>
  );
};

export default Notification;
