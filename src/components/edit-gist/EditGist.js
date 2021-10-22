import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../create-gist/CreateGist.scss";
import { updateGist } from "../../utils/GitHub";
import { useState } from "react";

const EditGist = (name, content) => {
  const [contentGist, setContentGist] = useState("");
  const [nameGist, setNameGist] = useState("");

  const edit = () => {
    const payload = {
      files: {
        [nameGist]: {
          content: contentGist,
        },
      },
    };
    updateGist(payload);
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
        <h1>Edit Gist</h1>
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
            defaultValue={name}
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
            defaultValue={content}
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
            <Button variant="success" onClick={() => edit()}>
              Edit
            </Button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EditGist;
