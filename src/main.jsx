import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootFile from './RootFile/RootFile.jsx';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Error from './Pages/Error/Error';
import AuthProvider from './providers/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import SingleBrand from './components/SingleBrand/SingleBrand';
import Details from './components/Details/Details';
import Update from './components/Update/Update';







const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addproduct",
        element: <PrivetRoute><AddProduct/></PrivetRoute>,
      },
      {
        path: "/mycart",
        element: <PrivetRoute><MyCart/></PrivetRoute> ,
        loader: () => fetch('https://technology-and-electronics-server-n1b5nuiw0-utsos-projects.vercel.app/mycart')
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/brands/:id",
        element: <SingleBrand/>,
        loader: ({params}) => fetch(`https://technology-and-electronics-server-n1b5nuiw0-utsos-projects.vercel.app/products/${params.id}`)
      },
      {
        path: "/details/:_id",
        element: <PrivetRoute><Details/></PrivetRoute> ,
        loader: ({params}) => fetch(`https://technology-and-electronics-server-n1b5nuiw0-utsos-projects.vercel.app/productDetails/${params._id}`)
      },
      {
        path: "/update/:id",
        element: <PrivetRoute><Update/></PrivetRoute> ,
        loader: ({params}) => fetch(`https://technology-and-electronics-server-n1b5nuiw0-utsos-projects.vercel.app/update/${params.id}`)
      },
      
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
