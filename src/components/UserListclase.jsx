import React, { useState } from "react";
import User from "./User";

// const UserList = () => {
//   const users = [
//     {
//       id: 0,
//       name: "Eduardo",
//       lastName: "Aguilar",
//       isActive: false,
//       image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
//       email: "aheduardo5@gmail.com",
//     },
//     {
//       id: 1,
//       name: "Elioth",
//       lastName: "Perker",
//       isActive: false,
//       image: "https://https://st.depositphotos.com/1020341/4233/i/600/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
//       email: "eliot@gmail.com",
//     },
//     {
//       id: 2,
//       name: "Paco",
//       lastName: "Porter",
//       isActive: false,
//       image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
//       email: "paco@gmail.com",
//     },
//     {
//       id: 3,
//       name: "jsesus",
//       lastName: "Porter",
//       isActive: false,
//       image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fes%2Fimages%2Fsearch%2Fcampo%2F&psig=AOvVaw0cnbkiZp3TaT3Hjw8ifkvf&ust=1643820728859000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLijr8j73vUCFQAAAAAdAAAAABAD",
//       email: "paco@gmail.com",
//     },
    
//   ];

//   const [user, setUsers] = useState(users);

//   let deleteHandler = (id) => {
//     let nextState = user.filter((user) => user.id !== id);
//     console.log(user, 1);
//     console.log(nextState, 2)
//     setUsers(nextState);
//   };
//   return <div>
//     <div className="UserList">
//       {users.map((user) => (
//         <div className="userContent" key={user.id}>
//           <h1>{user.name + " " + user.lastName}</h1>
//           <p>{user.email}</p>
//           <p>{user.isActive === true ? "active" : "inactive"}</p>
//           <img src={user.image} alt="" />
//           <button onClick={() => deleteHandler(user.id)}>Borrar</button>
          
//         </div>
//       ))}
//       <User />
//     </div>
//   </div>;
// };

// export default UserList;
