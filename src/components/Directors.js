import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsArray = directors.map((director) => {
    const genreArray = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>;
    });
    return (
      <div key={director.name}>
        {director.name} Movie List:
        <ul>{genreArray}</ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArray}
    </div>
  );
}

export default Directors;
