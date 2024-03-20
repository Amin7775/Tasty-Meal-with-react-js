import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './App.jsx'
import './index.css'
import './font.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import AboutUs from './components/About Us/AboutUs.jsx'
import Login from './components/Login/Login.jsx'
import Menu from './components/Menu/Menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path: 'aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      }, 
      {
        path: 'menu',
        element: <Menu></Menu>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
