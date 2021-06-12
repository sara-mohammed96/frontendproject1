import React, { useContext, useEffect } from 'react';
import './App.css';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './CreateTheme';
import { UsersContext } from './state/userState/UserContext';
import { getToken } from './common/helpers';
import Router from './pages/Router';
import { getAllUsers } from './components/Users/users.service';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const { setIsAuthenticated, setIsLoading, setUsers, users } =
    useContext(UsersContext);

  console.log(users);

  useEffect(() => {
    getToken()
      .then((res) => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
    getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <Router />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
