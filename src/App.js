import React, { useState } from "react"
import "./App.css";
import PickersForm from "./PickersForm";
import Result from "./Result";

function App() {
  const [displaying, setDisplaying] = useState("waiting");
  const changeResultDisplayTo = (toDisplay) => {
    setDisplaying(toDisplay);
  }

  const [weatherData, setWeather] = useState({});
  const saveWeather = (weatherResponseData) => {
    setWeather(weatherResponseData);
  }
  const headerRolls = ["Raining", "Sunny", "Windy", "Cloudy", "Snowing", "Foggy", "Dusty", "Stormy", "Cold", "Hot"];
  const headerRoll = headerRolls[Math.floor(Math.random() * headerRolls.length)];



  return (
    <div className="App">
      <header className="App-header">
        <h1>Is It {headerRoll}?</h1>
      </header>
      <PickersForm changeResultDisplayTo={changeResultDisplayTo} saveWeather={saveWeather} />
      <Result display={displaying} resultData={weatherData} />
      <footer>
        <p >
          To make it more precise put the city&apos;s name, comma, 2-letter country code
          (<a href="https://www.iso.org/obp/ui/#search" alt="ISO3166" style={{ color: "#ddd" }}>ISO3166</a>).
          You will get all proper cities in chosen country.
          The order is important - the first is city name then comma then country.
          Example - London, GB or New York, US.<br />

        </p>
      </footer>
    </div>
  );
}

export default App;
