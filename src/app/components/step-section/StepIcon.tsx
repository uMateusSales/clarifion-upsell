import React from 'react'
import StepCheck from './StepCheck'

const StepIcon = () => {
  return (
    <div className='hover:opacity-60 cursor-pointer'>
    <div className=" w-5 h-5 left-0 top-0  bg-lime-400 rounded-full border-2 border-lime-400 relative" />
    <StepCheck />
    </div>
  )
}

export default StepIcon
