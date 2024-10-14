import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  render() {
    let mystyle = {
      color: "white",
    };
    return (
        <div style={mystyle} >
          {this.props.movie.Title}
          <Link to="/result" onClick={()=>this.props.getTitle(this.props.movie.Title)}>
            <img src={this.props.movie.Poster} id={this.props.movie.imdbID} />
          </Link>
        </div>
    );
  }
}

export default Movie;
