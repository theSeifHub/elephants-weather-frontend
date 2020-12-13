import React from "react"
import PropTypes from "prop-types"
import "./Result.css"

function Result({ display, resultData }) {
  const capitalize = (s) => {
    if (typeof s !== "string") {
      return ""
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

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
          <img
            src={`https://openweathermap.org/img/wn/${resultData.icon}@4x.png`}
            alt="weathericon"
          />
          <h2>
            {capitalize(resultData.description)}<br />
            {resultData.city} On {resultData.day}
          </h2>
        </>
      }

      {/* Request failed */}
      {
        display === "failure" &&
        <div>
          <p className="moonface">&#127770;</p>
          <h2>Invalid input! Try again.</h2>
        </div>
      }
    </div >
  )
}

// Prop types validation
Result.defaultProps = {
  display: "waiting",
  resultData: {}
}

Result.propTypes = {
  display: PropTypes.oneOf(["waiting", "loading", "result", "failure"]),
  resultData: PropTypes.oneOf([
    PropTypes.shape({}),
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      city: PropTypes.string,
      day: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ])
}

export default Result
