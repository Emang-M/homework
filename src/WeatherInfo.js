import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
    <div>
          <h1>Maun</h1>
          <ul>
            <li>
              September 16, Clear Sky
            </li>
            <li>
              Humidity: <strong>12%</strong>, Wind:{" "}
              <strong>13km/h</strong>
            </li>
          </ul>
        </div>
        
            <WeatherIcon code={props.data.icon} size={52} />
            <div>
              <span className="temperature">
                23
              </span>
              <span className="unit">°C</span>
          </div>  
       
    </div>
  );
}