import React from "react";
import ErrorText from "../Layout/ErrorText";
import LayoutWithoutFooter from "../Layout/LayoutWithoutFooter";

const PageNotFound = () => {
  return (
    <LayoutWithoutFooter>
      <ErrorText text="Page not found!" condition={true} />
    </LayoutWithoutFooter>
  );
};

export default PageNotFound;
