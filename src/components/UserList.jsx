import React, { useState } from "react";

const UserList = () => {
  const usersInit = [
    {
      id: 0,
      name: "Eduardo",
      lastName: "Aguilar",
      isActive: false,
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
      email: "aheduardo5@gmail.com",
    },
    {
      id: 1,
      name: "Elioth",
      lastName: "Perker",
      isActive: false,
      img: "https://https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
      email: "eliot@gmail.com",
    },
    {
      id: 2,
      name: "Paco",
      lastName: "Porter",
      isActive: false,
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
      email: "paco@gmail.com",
    },
    {
      id: 3,
      name: "jsesus",
      lastName: "Porter",
      isActive: false,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
      email: "paco@gmail.com",
    },
  ];
  const [users, setUsers] = useState(usersInit);

  return (
    <>
      <div>
        {users.map((user) => {
          <div>
            <p>{user.name + user.lastName}</p>
            <p>{user.isActive === true ? "active" : "inactive"}</p>
            <p>{user.email}</p>
            <p>{user.image}</p>
          </div>;
        })}
      </div>
    </>
  );
};

export default UserList;
