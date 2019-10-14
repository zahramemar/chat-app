import React from "react";
import Chat from "./Chat";
import Login from "./Login";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");
const otherUserId = urlParams.get("otherUserId");

export default () => (
  <div className="container">
    <div className="App">
      <div className="App_chatwindow">
        {userId && otherUserId ? (
          <Chat userId={userId} otherUserId={otherUserId} />
        ) : (
          <Login />
        )}
      </div>
    </div>
  </div>
);
