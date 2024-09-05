import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvidor, createBrowserRouter  } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
  path: "/",

  Element: <Layout />,

  children: [
    {
      path: "",

      Element: <Home />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvidor router={router} />
  </StrictMode>,
)
