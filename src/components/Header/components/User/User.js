import React from "react";
import UserPic from "../../icons/user.svg";
import "./User.css";

class User extends React.Component {
  render() {
    return (
      <>
        <img src={UserPic} alt="user" className="header_user_pic" />
        <span className="header_user_text">Theodore</span>
      </>
    );
  }
}

export default User;
