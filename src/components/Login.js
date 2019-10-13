import React from "react";

export default function Login() {
  return (
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
}

function login(userId, otherUserId) {
  window.location.href = `?userId=${userId}&otherUserId=${otherUserId}`;
}
