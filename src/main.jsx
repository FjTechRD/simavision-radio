import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import AuthProvider from "./components/auth/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
    </Provider>
  </StrictMode>,

)
