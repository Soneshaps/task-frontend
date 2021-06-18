import React from "react";
import "./messageBox.css";
const MessageBox = (props) => {
  return (
    <div className="message-box-wrapper">
      <div className="message-box-main">{props.message}</div>
    </div>
  );
};

export default MessageBox;
