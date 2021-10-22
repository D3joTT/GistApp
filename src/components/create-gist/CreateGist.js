import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./CreateGist.scss";
import { createGist } from "../../utils/GitHub";
import { useState } from "react";

const CreateGist = () => {
  const [contentGist, setContentGist] = useState("");
  const [nameGist, setNameGist] = useState("");

  const create = (name, con) => {
    const payload = {
      files: {
        [name]: {
          content: con,
        },
      },
    };
    createGist(payload);
  };

  const changeContent = (e) => {
    setContentGist(e.target.value);
  };

  const changeName = (e) => {
    setNameGist(e.target.value);
  };

  return (
    <div className="createGistContainer">
      <div className="createGist">
        <h1>Create Gist</h1>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Name"
          className="mb-3"
          style={{ fontSize: "13px" }}
        >
          <Form.Control
            as="textarea"
            spellCheck="false"
            placeholder="Name"
            onChange={(e) => {
              changeName(e);
            }}
            style={{ height: "54px", fontSize: "13px" }}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Content"
          style={{ fontSize: "13px" }}
        >
          <Form.Control
            as="textarea"
            spellCheck="false"
            placeholder="Content"
            onChange={(e) => {
              changeContent(e);
            }}
            style={{ height: "100px", fontSize: "14px" }}
          />
        </FloatingLabel>
        <div className="createButtons">
          <NavLink to="/gists">
            <Button variant="danger">Cancel</Button>
          </NavLink>
          <NavLink to="/gists">
            <Button
              variant="success"
              onClick={() => create(nameGist, contentGist)}
            >
              Create
            </Button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CreateGist;
