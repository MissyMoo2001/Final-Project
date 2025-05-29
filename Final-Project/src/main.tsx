// main.tsx or index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ShelfProvider } from "./ShelfContext"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <ShelfProvider>
    <App />
  </ShelfProvider>
  </BrowserRouter>
  </React.StrictMode>
)
