import React from 'react'

const PrimaryButton = () => {
  return (
    <>
      <div className='flex items-center group'>
        <button className='bg-blue-700 flex justify-center 
        items-center gap-2
        text-xl h-[40px] text-white px-5 py-2 
        hover:scale-105 duration-500 rounded-lg group-hover:bg-blue-700 '> 
        Choose Your Electronic Plan
        </button>
    
      </div>
    </>
  )
}

export default PrimaryButton
