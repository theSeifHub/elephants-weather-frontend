import React from "react"
import PropTypes from "prop-types"


function DateOption({ dateInfo }) {
  return (
    <>
      {
        dateInfo.isSelected &&
        <option
          selected
          value={dateInfo.milliseconds}
        >
          {dateInfo.weekDay}: {dateInfo.dmy}
        </option>
      }

      {
        !dateInfo.isSelected &&
        <option
          value={dateInfo.milliseconds}
        >
          {dateInfo.weekDay}: {dateInfo.dmy}
        </option>
      }
    </>
  )
}


// Prop types validation
DateOption.defaultProps = {
  dateInfo: {
    isSelected: false,
    dateString: "",
    milliseconds: null,
    weekDay: "",
    dmy: ""
  }
}

DateOption.propTypes = {
  dateInfo: PropTypes.shape({
    isSelected: PropTypes.bool.isRequired,
    dateString: PropTypes.string,
    milliseconds: PropTypes.number.isRequired,
    weekDay: PropTypes.string.isRequired,
    dmy: PropTypes.string.isRequired
  })
}

export default DateOption