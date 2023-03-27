import React from 'react'
import '../index.css'
import { createBrowserRouter } from 'react-router-dom'
import { AuthTemplate } from '../templates/AuthTemplate'
import { Home, About, Profile } from '../templates/AppTemplate'

const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthTemplate/>,
      errorElement: <div>Rota inexistente</div>
    },
  
    {
      path: '/dashboard',
      element: <Home/>,
    },
  
    {
      path: '/about',
      element: <About/>,
    },
  
    {
      path: '/profile',
      element: <Profile/>,
    }
  ])
  
  export {router}