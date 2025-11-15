import { useState } from 'react'
import './App.css'
import Main from './screens/Main'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Loginpage from './screens/Loginpage';
import Register from './screens/Register';
import Schedule from './screens/Schedule';
import Notify from './screens/Notify';

function App() {

   const router = createBrowserRouter([
        {
          path:'/',
          element:<Main/>
        },
        {
          path:"/login",
          element:<Loginpage/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/notify",
          element:<Notify/>
        },
        {

          path:"/schedule",
          element:<Schedule/>
        }
    ])


  return (
    <>
   <div className="h-screen w-screen bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670')]">
     <RouterProvider router={router} />
   </div>
    </>
  )
}

export default App
