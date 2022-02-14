import React from "react";
import ErrorText from "../Layout/ErrorText";
import LayoutWithoutFooter from "../Layout/LayoutWithoutFooter";

const Location = () => {
  return (
    <LayoutWithoutFooter>
      <ErrorText text="Location not found!" condition={true} />
    </LayoutWithoutFooter>
  );
};

export default Location;
