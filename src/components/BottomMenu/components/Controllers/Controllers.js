import React from "react";
import Controller from "./components/Controller/Controller";
import "./Controllers.css";

const Controllers = props => {
  return (
    <div className="controllers">
      <Controller />
      <Controller isDisabled />
      <Controller isDisabled />
      <Controller isDisabled />
    </div>
  );
};

export default Controllers;
