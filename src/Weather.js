import React,{useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
    let [loaded, setLoaded] = useState(false);
    let [city, setCity] = useState(props.defaultCity);
  
    function handleResponse(response) {
        console.log(response.data);
        setLoaded(true);
      setWeatherData({
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.sys.timezone * 7200),
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "dff5c692192605ee5ed7f95b423ae857";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
    }
  
    function handleCityChange(event) {
      setCity(event.target.value);
    }
  
    
  
    let form = (
          <form onSubmit={handleSubmit}>
              <div className="col-9 ">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 p-0">
                <button type="submit" className="btn btn-primary w-100" > Search </button>
              </div>
          </form>
    );
          if(loaded) {
            return(
                <div>
                {form}
                <WeatherInfo data={weatherData} />
                <img src={weatherData.icon} alt={weatherDatas.description} />

                <footer>
                  This project was coded by{" "}
                  <a
                    href="https://github.com/Emang-M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Emang
                  </a>{" "}
                  and is{" "}
                  <a
                    href="https://github.com/shecodesio/weather"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open-sourced on GitHub
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://shecodes-weather.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hosted on Netlify
                  </a>
                </footer>
              </div>
            );
          } else {
      return "Loading...";
    }
  }