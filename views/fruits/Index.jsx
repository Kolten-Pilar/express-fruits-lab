import React from "react";

function Index({ fruits }) {
  return (
    <div>
      <nav>
        <a href="/fruits/new">Create a New Fruit!</a>
      </nav>{" "}
      <br />
      {fruits.map((fruit, i) => {
        return (
          <li key={i}>
            <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color} <br />
            and{" "}
            {fruit.readyToEat ? "it is ready to eat" : "it is not ready to eat"}
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
