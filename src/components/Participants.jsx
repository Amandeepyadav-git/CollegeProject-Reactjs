import React from 'react'

const Participants = (props) => {
  return (
    <>
    <div className='bg-blue-200 w-[28%] h-full rounded-2xl flex justify-center items-center flex-col'>
   <div className='font-bold'>{props.NAME}</div>
   <div>{props.about}</div>
    </div>
    </>
  )
}

export default Participants