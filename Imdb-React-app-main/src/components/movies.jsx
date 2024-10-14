import React, { Component } from "react";
import Movie from "./movie";

const Movies = (props) => {
  return (
    <div id="main">
      {props.movies.map((movie) => (
        <Movie
        key={movie.imdbID}
        movie={movie}
        getTitle={props.getTitle}
         />
      ))}
    </div>
  );
};

export default Movies;
