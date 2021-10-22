import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="primary" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
