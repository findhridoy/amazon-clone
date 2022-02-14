import React from "react";

const ErrorText = ({ text, condition }) => {
  return (
    <div className="error__text">
      {condition && <h2 className="error__code">404</h2>}
      <h4>{text}</h4>
    </div>
  );
};

export default ErrorText;
