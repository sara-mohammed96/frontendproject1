import React from "react";

export const UsersContext = React.createContext();

const UsersProvider = props => {
  const getUsers = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => result)
      .catch(error => console.log("error happened", error));
  };

  return (
    <UsersContext.Provider value={{ getUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider
