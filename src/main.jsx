import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import TechItemPage from './components/TechItemPage/TechItemPage.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children:[
      {
        path:"",
        element: <LandingPage/>
      },
      {
        path:"CT",
        element:<TechItemPage/>
      }
    ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
