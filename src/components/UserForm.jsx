import React, { useState } from "react";
import Header from "./Header";
import UserList from "./UserList";

const UserForm = () => {
  const usersInit = [
    {
      id: 1,
      name: "Eduardo",
      lastName: "Aguilar",
      isActive: false,
      img: "https://via.placeholder.com/64",
      email: "aheduardo5@gmail.com",
    },
    {
      id: 2,
      name: "Elioth",
      lastName: "Perker",
      isActive: false,
      img: "https://via.placeholder.com/64",
      email: "eliot@gmail.com",
    },
    {
      id: 3,
      name: "Paco",
      lastName: "Porter",
      isActive: false,
      img: "https://via.placeholder.com/64",
      email: "paco@gmail.com",
    },
    {
      id: 5,
      name: "jsesus",
      lastName: "Porter",
      isActive: false,
      img: "https://via.placeholder.com/64",
      email: "paco@gmail.com",
    },
  ];
  const [users, setUsers] = useState(usersInit);

  const deleteHandler = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    // const usersUpdated = users.filter((user) => user.id !== userId);
    // setUsers(usersUpdated);
  };

  const updateHandler = (userUpdating) => {
    console.log(userUpdating);
  };

  return (
    <div>
      <Header  users={users} updateHandler={updateHandler} usersLength={users.length} />
      <UserList
        users={users}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
};

export default UserForm;
