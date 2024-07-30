import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Click from './components/Click.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Click userName="Delba" profile="Just View"/>
    <Click userName="Sial" profile="Verify Profile"/>
  </React.StrictMode>,
)
