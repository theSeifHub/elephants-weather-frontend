import React, { useState } from "react"
import PropTypes from "prop-types"
import DateOption from "./DateOption"
import "./PickersForm.css"


function PickersForm({ changeResultDisplayTo, saveWeather }) {
  // create date options for select tag
  const createDateOptions = () => {
    const days = [];
    const todayObj = new Date();
    // Starting 5 days ago to get an array of days in order
    todayObj.setDate(todayObj.getDate() - 5)
    // 12 = 4 last days + today + next 7 days
    for (let i = 0; i < 12; i += 1) {
      let isSelected = false;
      const milliseconds = todayObj.setDate(todayObj.getDate() + 1);
      const dateString = new Date(milliseconds).toDateString();
      // dmy stands for: day, month, year
      let [weekDay, ...dmy] = dateString.split(" ");
      dmy = dmy.join("-");
      // select todays date and make default selection
      if (dateString === new Date(Date.now()).toDateString()) {
        isSelected = true;
        weekDay = `Today ${weekDay}`
      }
      days.push({
        isSelected,
        dateString,
        milliseconds,
        weekDay,
        dmy
      })
    }
    return days;
  };

  const [dates, setDates] = useState(createDateOptions());
  const [location, setLocation] = useState("");

  const handleChange = (evt) => {
    // handle location input
    if (evt.target.name === "location") {
      setLocation(evt.target.value);
    }
    // handle date selection
    else if (evt.target.name === "date") {
      const selectedValue = parseInt(evt.target.value, 10);
      const selectedDate = new Date(selectedValue).toDateString();
      const newDates = dates.map(date => {
        let { isSelected, ...rest } = date;
        if (date.dateString === selectedDate) {
          isSelected = true;
          return { isSelected, ...rest }
        }
        isSelected = false;
        return { isSelected, ...rest }
      })
      setDates(newDates);
    }
  }

  // Submit and retrieve weather data
  const submitForm = async (locationQuery, dateQuery) => {
    let res = await fetch(`http://localhost:5000/${locationQuery}/${dateQuery}`);
    res = await res.json();
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // turn on loading 
    changeResultDisplayTo("loading");

    const dateQuery = document.getElementById("date").value;
    const res = await submitForm(location, dateQuery);

    if (res.requestSuccess || res.message === "Success") {
      saveWeather(res);
      changeResultDisplayTo("result");
    } else {
      changeResultDisplayTo("failure");
    }
  }

  //! COMPONENT UI ##################
  return (
    <form onSubmit={handleSubmit}>
      <div>

        <label htmlFor="location">
          <input
            type="text"
            id="location"
            className="picker"
            name="location"
            value={location}
            onChange={handleChange}
            placeholder="Enter Location"
            autoComplete="off"
            required />
        </label>

        <label htmlFor="date">
          <select
            id="date"
            className="picker"
            name="date"
            value={dates.find(date => date.isSelected).milliseconds}
            onChange={handleChange}
            required
          >
            {dates.map(date => (
              <DateOption dateInfo={date} key={date.milliseconds} />
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Find Out</button>
    </form>
  )
}


// Prop types validation
PickersForm.defaultProps = {
  changeResultDisplayTo: () => null,
  saveWeather: () => null
}
PickersForm.propTypes = {
  changeResultDisplayTo: PropTypes.func,
  saveWeather: PropTypes.func
}

export default PickersForm;
