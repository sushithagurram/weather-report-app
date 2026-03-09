import React from "react";
import Weather from "../components/Weather";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather Report App</h1>
      <Weather />
    </div>
  );
}

export default Home;