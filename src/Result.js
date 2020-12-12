import React from "react"
import PropTypes from "prop-types"
import "./Result.css"

function Result({ display }) {
  return (
    <div className="result">
      {/* Waiting for entries */}
      {
        display === "waiting" &&
        <h3>Enter parameters above to get weather info</h3>
      }

      {/*  Loading  */}
      { display === "loading" &&
        <div className="lds-ripple"><div /><div /></div>
      }

      {/* displaying retrieved result */}
      {
        display === "result" &&
        <>
          <img src="https://openweathermap.org/img/wn/13n@4x.png" alt="weathericon" />
          <h2>heavy intensity shower rain<br />On Fri Dec 02, 2020</h2>
        </>
      }

      {/* Request failed */}
      {
        display === "failure" &&
        <>
          <img src="https://openweathermap.org/img/wn/50n@4x.png" alt="weathericon" />
          <h2>Request failed</h2>
        </>
      }
    </div>
  )
}

Result.defaultProps = {
  display: "waiting"
}

Result.propTypes = {
  display: PropTypes.oneOf(["waiting", "loading", "result", "failure"])
}

export default Result
