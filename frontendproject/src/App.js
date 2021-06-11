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

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const { isAuthenticated, setIsAuthenticated, setIsLoading } =
    useContext(UsersContext);
  console.log(isAuthenticated);

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
