import React from "react";

function Show({ fruit }) {
  console.log(fruit);
  return (
    <div>
      <h1>The {fruit.name} is {fruit.color}</h1>
      {fruit.readyToEat ? "It's ready to eat" : "Ew it's not ready to eat"}
      
    </div>
  )
}

module.exports = Show;
