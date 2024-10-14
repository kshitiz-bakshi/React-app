import "./results.css";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Result = (props) => {
  const key = "e1e16497";
  const apiurl = "https://www.omdbapi.com/?apikey=" + key;
  let url = apiurl + "&t=" + props.movieTitle;
  url = url.replace(/ /g, "+");

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        // console.log(data);
      });
  }, [url]);

  return (
    <>
      {" "}
      <div className="containerResult">
        <div className="containerInfo">
          <ul>
            <li id="Genre">
              <b>Genre : </b>
              {details.Genre}
            </li>
            <br />
            <li id="Released">
              <b>Released : </b>
              {details.Released}
            </li>
            <br />
            <li id="Rated">
              <b>Rated : </b>
              {details.Rated}
            </li>
            <br />
            <li id="imdbRating">
              <b>imdbRating : </b>
              {details.imdbRating}
            </li>
            <br />
            <li id="Director">
              <b>Director : </b>
              {details.Director}
            </li>
            <br />
            <li id="Writer">
              <b>Writer : </b>
              {details.Writer}
            </li>
            <br />
            <li id="Actors">
              <b>Actors : </b>
              {details.Actors}
            </li>
            <br />
          </ul>
        </div>
        <div className="image">
          <h1>{props.movieTitle}</h1>
          <img src={details.Poster} />
        </div>
      </div>
      <div className="plot">
        <p id="plot"><b>Plot : </b>{details.Plot}</p>
        <Link to="/">
          <button>GO BACK</button>
        </Link>
        <a target="_blank" id="imdb" href={"https://www.imdb.com/title/"+ details.imdbID}>
          <button>VIEW IMDB</button>
        </a>
      </div>
    </>
  );
};

export default Result;
