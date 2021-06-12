import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UsersContext } from '../../state/userState/UserContext';

function PrivateRoute({ children, ...rest }) {
 const { isAuthenticated, isLoading } = useContext(UsersContext);
 return (
  <Route
   {...rest}
   render={() => {
    return isLoading ? (
     ''
    ) : isAuthenticated ? (
     children
    ) : (
     <Redirect to='/login' />
    );
   }}
  />
 );
}

export default PrivateRoute;
