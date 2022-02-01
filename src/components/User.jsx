import React from "react";
import UserActions from "./UserActions";

const User = () => {
  return (
    <>
      <div className="userContent">
        <a href="">
          <div className="imgStatus"></div> name lastname (test@test.com)
          <UserActions />
        </a>
      </div>

    </>
  );
};

export default User;
