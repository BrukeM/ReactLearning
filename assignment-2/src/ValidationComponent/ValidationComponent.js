import React from "react";
import "./ValidationComponent.css";

const ValidationComponent = (props) => {
  let validationText = <p>Text too short</p>;

  if (props.length >= 5) {
    validationText = <p>Text long enough</p>;
  }

  return (
    <div className="ValidationComponent">
      <h3>ValidationComponent</h3>
      {validationText}
    </div>
  );
};

export default ValidationComponent;
