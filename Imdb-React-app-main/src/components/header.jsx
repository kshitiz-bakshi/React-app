import React, { Component } from "react";
import { useState } from "react";

const Header = (props) => {

  const submit = (e) => {
    e.preventDefault();
  };
  

  return (
    <>
      <div className="container">
        <form id="form" className="form" onSubmit={submit}>
          <h1>Search For Any Movie Details</h1>
          <input
            id="Movie"
            className="search"
            type="text"
            autoComplete="off"
            placeholder="Movie Name.."
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          />
          {/* <button className="btn" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </>
  );
};
export default Header;
