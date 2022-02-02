import React from "react";

const User = ({users, deleteH}) => {
  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name + user.lastName}</p>
            <p>{user.isActive === true ? "active" : "inactive"}</p>
            <p>{user.email}</p>
            <p>{user.image}</p>
            <button onClick={() => deleteH(user.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
