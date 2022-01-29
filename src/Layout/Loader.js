import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress color="secondary" size={60} />
    </div>
  );
};

export default Loader;
