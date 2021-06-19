import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UsersContext } from '../../state/userState/UserContext';

function PrivateRoute({ children, isAdminRequired, ...rest }) {
 const { isAuthenticated, isLoading, isAdmin } = useContext(UsersContext);
 console.table({ isAdminRequired, isAdmin });
 console.log(!isAdminRequired || isAdmin);
 return (
  <Route
   {...rest}
   render={() => {
    if (!isLoading) {
     if (isAuthenticated) {
      if (isAdminRequired) {
       return isAdmin ? children : <Redirect to='/applications' />;
      }
      return children;
     }
     return <Redirect to='/login' />;
    }
    return '';
   }}
  />
 );
}

export default PrivateRoute;
