import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="253532312367-mlnabrsfhbtmpnppp4opovsmh5g6j44e.apps.googleusercontent.com">
      <StrictMode>
        <App />
      </StrictMode>
  </GoogleOAuthProvider>,
)
