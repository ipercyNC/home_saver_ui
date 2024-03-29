import Dashboard from './components/Dashboard'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
