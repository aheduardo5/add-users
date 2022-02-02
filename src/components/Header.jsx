import React from "react";

const Header = ({updateHandler, usersLength, users}) => {

  return (
    <div>
      <h1>
        user manager({usersLength})
        <span>
          <button onClick={() => updateHandler(users)}> Agregar</button>
        </span>
      </h1>
    </div>
  );
};

export default Header;
