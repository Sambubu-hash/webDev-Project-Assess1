// Entry point: I load my global styles and render the App into the #root div in index.html
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode helps me catch mistakes while developing (it has no effect on the final build)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
