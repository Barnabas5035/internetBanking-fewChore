import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Styles/Pages/Navbar.css'
import './Styles/Pages/main.css'
import './Styles/Pages/SideBar.css'
import './Styles/Pages/Transaction.css'
import MainPage from './Component/mainPage'
import Transaction from './Pages/home/Views/Transaction'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/transfer',
    element: <Transaction />,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
