import React from "react";
import { useCookies } from "react-cookie";
export default function Cookies() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }
  return (
    <div className="App">
      <h1>React cookies</h1>
       {cookies.user && <p>{cookies.user}</p>}      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}
