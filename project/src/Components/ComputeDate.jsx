import React from 'react'

function DateFormater({dateString}) {
const date = new Date(dateString);

const formattedDate = date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const formattedTime = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true
});

const formattedDateTime = ` ${formattedDate} \n ${formattedTime} (UTC)`;
console.log(formattedDateTime);

  return (
    <div>
      <p> {formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  )
}

export default DateFormater
