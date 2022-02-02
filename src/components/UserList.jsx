import React from "react";
import User from "./User"

const UserList = ({users,deleteHandler, updateHandler}) => {
  return (
    <div className="UserList">
    <User users={users} deleteH={deleteHandler} updateHandler={updateHandler}/>
    </div>
  );
};

export default UserList;
