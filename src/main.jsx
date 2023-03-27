import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthTemplate } from './templates/AuthTemplate'
import { Home, About, Profile } from './templates/AppTemplate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthTemplate/>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
