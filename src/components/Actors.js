import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsArray = actors.map((actor) => {
    const movieArray = actor.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={actor.name}>
        {actor.name} Movie List:
        <ul>{movieArray}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArray}
    </div>
  );
}

export default Actors;
