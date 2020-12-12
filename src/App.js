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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Is It <span id="header-roll">Raining</span>?</h1>
      </header>
      <PickersForm changeResultDisplayTo={changeResultDisplayTo} saveWeather={saveWeather} />
      <Result display={displaying} dataToDisplay={weatherData} />
    </div>
  );
}

export default App;
