import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Help from './pages/Help.jsx'
import Cart from './pages/Cart.jsx'
import Search from './pages/Search.jsx'
import Resturent from './pages/Resturent.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import DeliveryAnimation from './pages/deliveryAnimation.jsx'

import Checkout from './pages/Checkout.jsx'

const res=createBrowserRouter([{
  path:'/',
  element:<App></App>,
  children:[
    {
      path:'/',
      element:<Home></Home>

    },
    {
      path:'/help',element:<Help></Help>
    },
    {
      path:'/cart',element:<Cart></Cart>
    },
    {
      path:'/Search',element:<Search></Search>
    },
    {
      path:'/resturent/:resId',
      element:<Resturent></Resturent>
    },
    {
      path:"/DeliveryAnimation",
      element:<DeliveryAnimation/>
    },
    {
      path:"/Checkout",
      element:<Checkout/>
    },
    {
      path:'*',element:<PageNotFound></PageNotFound>
    }
    
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={res}></RouterProvider>
  </StrictMode>,
)
