import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Singup from './Components/Signup/Singup';
import Authprovider from './Components/Providers/Authprovider';
import Privateroutes from './Components/Privateroutes/Privateroutes';
import Orders from './Components/Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      
      {
        path:"/singup",
        element:<Singup></Singup>
      },
      {
        path: '/orders',
        element: <Privateroutes><Orders></Orders></Privateroutes>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </StrictMode>,
)
