import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="UserInput">
      <input
        type="text"
        style={props.style}
        onChange={props.changed}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
