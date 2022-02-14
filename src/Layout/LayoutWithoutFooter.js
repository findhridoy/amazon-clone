import React from "react";
import Header from "../Components/Header";

const LayoutWithoutFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutWithoutFooter;
