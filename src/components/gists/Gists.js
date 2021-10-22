import React, { useEffect, useContext, useState } from "react";
import Gist from "./../gist/Gist";
import "./Gists.scss";
import { GistsContext } from "../../contexts/GistsContext";
import Loader from "../loader/Loader";
import { getGists, deleteGist } from "../../utils/GitHub";

const Gists = () => {
  const [gists, setGists] = useContext(GistsContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getGists().then((res) => {
      setGists(res.data);
    });
    // eslint-disable-next-line
  }, []);

  const del = (delId) => {
    deleteGist(delId);
    setGists(
      gists.filter((gist) => {
        return delId !== gist.id;
      })
    );
  };

  if (gists["0"] === undefined) return <Loader />;

  return (
    <div className="gists">
      {gists.map((data) => {
        return Object.keys(data.files).map((key) => {
          return (
            <Gist
              key={key}
              id={data.id}
              isLoaded={isLoaded}
              setIsLoaded={setIsLoaded}
              del={del}
              name={data.files[key].filename}
            />
          );
        });
      })}
    </div>
  );
};

export default Gists;
