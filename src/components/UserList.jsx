import React, { useState } from "react";
import User from "./User"

const UserList = ({users,deleteHandler,updateHandler}) => {
  return (
    <>
    <User users={users} deleteH={deleteHandler} updateH={updateHandler}/>
    </>
  );
};

export default UserList;
