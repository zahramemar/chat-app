import React from "react";

export default function RightMessage({ data }) {
  return (
    <>
      <div className="msg right-msg">
        <div className="msg-img"></div>
        <div className="message_wrapper_inner">
          <div className="message message-self">
            <div className="message_content">{data.text}</div>
          </div>
        </div>
      </div>
    </>
  );
}
