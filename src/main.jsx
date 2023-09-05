import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './routes/home'
import Produtos from './routes/produtos'
import Erro from './routes/error'
import EditarProdutos from './routes/editarProdutos'

const router = createBrowserRouter([
  
   {
    path: "/",
    element: <App/>,
    errorElement: <Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
         path: "/produtos",
          element: <Produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      }
       
    ]
   }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)