import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { Home } from "@/pages"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App