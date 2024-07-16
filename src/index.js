import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './routes'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <RouterProvider router={router} />
)
