//

import React from 'react'

const Participants = (props) => {
  return (
    <>
    <div className='bg-[rgba(0,0,0,0.4)] w-[28%] h-full rounded-2xl flex justify-center items-center flex-col'>
   <div className='font-bold text-white'>{props.NAME}</div>
   <div className='text-white'>{props.about}</div>
    </div>
    </>
  )
}

export default Participants