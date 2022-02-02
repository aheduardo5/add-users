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
      email: "paco1@gmail.com",
    },
    {
      id: 5,
      name: "jsesus",
      lastName: "Porter",
      isActive: false,
      img: "https://via.placeholder.com/64",
      email: "paco2@gmail.com",
    },
  ];
  const [ users, setUsers ] = useState(usersInit);
  const [ showForm, setShowForm ] = useState(false); // estado para controlar cuando se muestra el formulario
  const deleteHandler = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    // const usersUpdated = users.filter((user) => user.id !== userId);
    // setUsers(usersUpdated);
  };
  // toogle
  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // validar formulario
    let validForm = true;
    if (!e.target.name.value || !e.target.lastname.value || !e.target.email.value || !e.target.image.value) {
      validForm = false;
    }
    if (!validForm) {
      alert('Invalid Form');
      return;
    }
    const newUser = {
      id: crypto.randomUUID(),
      name: e.target.name.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      img: e.target.image.value,
      isActive: e.target.isActive.checked
    };
    // validar que el usuario no existe
    if (users.filter(user => user.email === newUser.email).length) {
      alert('User already exits');
      return;
    }
    setUsers([ ...users, newUser ]);
  }
  return (
    <div>
      <Header  users={users} showFormHandler={ showFormHandler } usersLength={ users.length } />
      { showForm &&
        <form onSubmit={ onSubmitHandler }>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Lastname</label>
            <input type="text" name="lastname" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label>Image</label>
            <input type="text" name="image" />
          </div>
          <div>
            <label><input type="checkbox" name="isActive" /> Activo</label>
          </div>
          {/* <input type="submit" value="Submit" /> */}
          <button type="submit">Enviar</button>
        </form>
      }
      <UserList
        users={users}
        deleteHandler={deleteHandler}
        updateHandler={showFormHandler}
      />
    </div>
  );
};
export default UserForm;