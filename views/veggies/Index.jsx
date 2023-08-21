import React from "react";

function Index({ veggies }) {
  return (
    <div>
      <nav>
        <a href="/veggies/new">Create a New Veggie!</a>
      </nav> <br/>
      {veggies.map((veggie, i) => {
        return (
          <li key={i}>
           
            <a href={`/veggies/${i}`}>{veggie.name}</a> is {veggie.color} <br />
            and {
              veggie.readyToEat ? "it is ready to eat" : "it is not ready to eat"
            }
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;
