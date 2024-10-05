import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EventsProvider } from './context/EventsContext';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>

  </StrictMode>,
)
