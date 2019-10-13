import React from "react";

export default function LeftMessage({ data }) {
  return (
    <>
      <div className="msg left-msg">
        <div className="msg-img"></div>
        <div className="message_wrapper_inner">
          <div className="message message-other">
            <div className="message_content">{data.text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
