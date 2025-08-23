import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <h1>Sorry, the page you are looking for was not found</h1>
      <Link to="/" className="link-button">
        Return Home
      </Link>
    </>
  );
};

export default NotFound;
