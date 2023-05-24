import 'modern-normalize'
import './assets/index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { AuthContextProvider } from '@contexts/AuthContext'
import theme from './theme'
import App from './App.jsx'

const Root = document.getElementById('root')

createRoot(Root).render(

  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </ThemeProvider>
)
