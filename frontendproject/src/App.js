import './App.css';
import UserPage from './pages/UserPage';
import ComplaintsDisplay from './pages/ComplaintsDisplay';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from './CreateTheme'
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
function App() {
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
    <div>
      <UserPage />
    </div>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
