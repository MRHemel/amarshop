import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './LayOut/Components/Home/Home';
import AllProducts from './LayOut/Components/AllProducts/AllProducts';
import CartProvider from './Providers/CartProvider';
import ViewCart from './Components/ViewCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/viewcart',
        element: <ViewCart></ViewCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider><RouterProvider router={router} /></CartProvider>
  </React.StrictMode>,
)
