import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Loginpage from './components/Loginpage';

function App() {

   const router = createBrowserRouter([
        {
          path:'/',
          element: <App/>
        },
        {
          path:"/login",
          element:<Loginpage/>
        }
    ])


  return (
    <>
   <div className='h-screen w-screen bg-[rgb(233,227,238)] '>
     <Main/>
     <Footer/>
   </div>
    </>
  )
}

export default App
