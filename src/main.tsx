import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import outputs from '../amplify_outputs.json'
import App from './App.tsx'
import GameGrid from './components/GameGrid.tsx'
import ErrorPage from './ErrorPage.tsx'
import './index.css'

Amplify.configure(outputs)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: 'game',
    //     element: (

    //     ),
    //   },
    // ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
