import './App.css';
import UserPage from './pages/UserPage';
import ComplaintsDisplay from './pages/ComplaintsDisplay';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from './CreateTheme'
import LoginPage from './pages/LoginPage'
import Profiles from './pages/Profiles'
import ProfileDetails from './pages/ProfileDetails'
import Positions from './pages/Positions'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/UseToken';
import Users from './pages/Users'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/Profiles">
                <Profiles />
              </Route>

              <Route path="/UserPage">
                <UserPage />
              </Route>
              <Route path="/Complaints">
                <ComplaintsDisplay />
              </Route>
              <Route path="/positions">
                <Positions />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>

          </BrowserRouter>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
