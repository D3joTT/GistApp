// import "bootstrap/dist/css/bootstrap.min.css";
// // eslint-disable-next-line
// import { BrowserRouter as Router, NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import "./GistAction.scss";
// import { createGist } from "../../utils/GitHub";
// import { useState } from "react";
// import CreateGist from "../create-gist/CreateGist";

// const GistAction = ({ name, content, type, action }) => {
//   const [contentGist, setContentGist] = useState(content);
//   const [nameGist, setNameGist] = useState(name);

//   const create = (name, con) => {
//     const payload = {
//       files: {
//         [name]: {
//           content: con,
//         },
//       },
//     };
//     createGist(payload);
//   };

//   const changeContent = (e) => {
//     setContentGist(e.target.value);
//   };

//   const changeName = (e) => {
//     setNameGist(e.target.value);
//   };

//   return (
//     <div className="createGistContainer">
//       <div className="createGist
//         <div className="createButtons">
//           <NavLink to="/gists">
//             <Button variant="danger">Cancel</Button>
//           </NavLink>
//           <NavLink to="/gists">
//             <Button
//               variant="success"
//               onClick={() => create(nameGist, contentGist)}
//             >
//               {type}
//             </Button>{" "}
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// GistAction.defaultProps = {
//   name: "",
//   content: "",
//   type: "Create",
// };

// export default GistAction;
