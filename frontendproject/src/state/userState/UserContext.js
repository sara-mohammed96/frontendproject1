import React, { useState } from 'react';

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
 const [user, setUser] = useState(null);
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [isLoading, setIsLoading] = useState(true);
 const [token, setToken] = useState(true);

 return (
  <UsersContext.Provider
   value={{
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
    token,
    setToken,
   }}
  >
   {props.children}
  </UsersContext.Provider>
 );
};

export default UsersProvider;