import React from "react";

function login(userId, otherUserId) {
  window.location.search = `?userId=${userId}&otherUserId=${otherUserId}`;
}

export default () => (
  <div className="Login">
    <h1 className="Login__title">Chat app with Hasura and react </h1>
    <div className="Login__button" onClick={() => login("1", "2")}>
      login as user 1
    </div>
    <div className="Login__button" onClick={() => login("2", "1")}>
      login as user 2
    </div>
  </div>
);
