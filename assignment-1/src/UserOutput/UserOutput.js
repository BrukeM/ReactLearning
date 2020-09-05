import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username is: {props.username}</p>
      <p>I hope I'm overwritten!</p>
    </div>
  );
};

export default userOutput;
