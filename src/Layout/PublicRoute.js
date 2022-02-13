import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  // use context
  const {
    state: { userInfo },
  } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
