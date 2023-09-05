import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import Produto from './components/produtos'
import Error from './components/error'
import EditarProduto from './components/editarProdutos'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element:<Produto/>
      },
      {
        path: "/editar/produtos/:id",
        element: <EditarProduto/>
      },
      
    ]
    
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
