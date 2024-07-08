import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import outputs from '../amplify_outputs.json'
import App from './App.tsx'
import ErrorPage from './ErrorPage.tsx'
import './index.css'
import GameWrapper from './routes/GameWrapper.tsx'
import Index from './routes/Index.tsx'

Amplify.configure(outputs)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'game',
        element: <GameWrapper />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
