import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FormDataProvider } from './ContextAPI/FormDataContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_SIGNIN_CLIENT_ID}>
    <FormDataProvider>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </FormDataProvider>
  </GoogleOAuthProvider>,
)
