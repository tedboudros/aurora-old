import React from "react";
import Controllers from "./components/Controllers/Controllers";
import "./BottomMenu.css";

const BottomMenu = props => {
  return (
    <div className="bottomMenu">
      <Controllers />
    </div>
  );
};

export default BottomMenu;
