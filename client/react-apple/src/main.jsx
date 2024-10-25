import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "./commonResources/css/styles.css"
import "./commonResources/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </StrictMode>
);
