import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import outputs from '../amplify_outputs.json'
import App from './App.tsx'
import './index.css'

Amplify.configure(outputs)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
