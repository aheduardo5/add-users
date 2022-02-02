import React from "react";

const Header = ({updateHandler, usersLength}) => {

  return (
    <div>
      <h1>
        user manager({usersLength})
        <span>
          <button onClick={() => updateHandler()}> Agregar</button>
        </span>
      </h1>
    </div>
  );
};

export default Header;
