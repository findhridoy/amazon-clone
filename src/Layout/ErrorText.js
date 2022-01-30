import React from "react";

const ErrorText = ({ text }) => {
  return (
    <div className="error__text">
      <h4>{text}</h4>
    </div>
  );
};

export default ErrorText;
