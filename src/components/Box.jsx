import React from 'react'
import { createBrowserRouter, RouterProvider, Link} from "react-router-dom";

const Box = (props) => {
  return (
    <>
    <div className='bg-blur h-full w-full p-5 gap-5 flex flex-col justify-center rounded-2xl'>
    <div className='text-2xl flex justify-center font-bold w-full h-[50%] flex-nowrap'>{props.heading}</div>
    <div className='text-[20px] h-[25%]'>{props.text}</div>
    <div className='bg-blue-700 rounded h-[25%] text-white flex justify-center'><Link to={props.add}><button className='h-full cursor-pointer'>{props.name}</button></Link></div>
    </div>
    </>
  )
}

export default Box