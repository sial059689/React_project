import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvidor, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./Components/Home/Home.jsx"


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


ReactDom.render(
  <React.StrictMode>
    <RouterProvidor router={router} />
  </React.StrictMode>,
  document.getElementById('root')
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvidor router={router} />
//   </StrictMode>,
)
