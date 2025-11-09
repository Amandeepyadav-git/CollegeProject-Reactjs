import React from 'react'

const Box = (props) => {
  return (
    <>
    <div className='bg-white h-[80%] w-[28%] p-5 gap-5 flex flex-col justify-center'>
    <div className='text-2xl flex justify-center font-bold w-full h-[50%] flex-nowrap'>{props.heading}</div>
    <div className='text-[20px] h-[25%]'>{props.text}</div>
    <div className='bg-blue-700 rounded h-[25%] text-white flex justify-center'><button className='h-full'>{props.name}</button></div>
    </div>
    </>
  )
}

export default Box