import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { getGist } from "./../../utils/GitHub";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gist.scss";

const Gist = ({ id, name, del }) => {
  const [gist, setGist] = useState([]);

  useEffect(() => {
    getGist(id)
      .then((res) => {
        setGist(res.data.files);
      })
      .catch(() => {});
    // eslint-disable-next-line
  }, []);

  if (!gist[name]) return null;

  return (
    <div className="gist">
      <Toast className="d-inline-block m-1 toast" onClose={() => del(id)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{name}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <NavLink to="/edit" className="edit-gist">
          <Toast.Body className="Dark">
            {gist[name].content
              .replaceAll(" ", " ")
              .split("\n")
              // eslint-disable-next-line
              .map((con, key) => {
                try {
                  return (
                    <div key={key} className="new-line">
                      {con}
                    </div>
                  );
                } catch (ex) {}
              })}
          </Toast.Body>
        </NavLink>
      </Toast>
    </div>
  );
};

export default Gist;
