import React from "react";

function Show({ veggie }) {
  console.log(veggie);
  return (
    <div>
      <h1>The {veggie.name} is {veggie.color}</h1>
      {veggie.readyToEat ? "It's ready to eat" : "Ew it's not ready to eat"}
      
    </div>
  )
}

module.exports = Show;