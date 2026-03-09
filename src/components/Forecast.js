import React from "react";

function Forecast({ data }) {

  return (
    <div>

      <h3>Forecast</h3>

      <ul>

        {data.map((item, index) => (
          <li key={index}>
            {item.day} - {item.temp}°C
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Forecast;