import React from "react";
import loading from "./icons/loading.svg";

const Loading = props => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
