import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvidor} from 'react-router-dom'
import Layout from './Layout/Layout.jsx'

const router = createBrowserRouter({
  path: "/",
  Element: <Layout />,
  children: [
    {
    path: "",
    Element: <Home />
  }
]
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvidor router={router} />
  </StrictMode>,
)
