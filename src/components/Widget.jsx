import React from 'react'

const Widget = ({item}) => {
  return (
    <div className='flex flex-col flex-1 p-4 gap-2 rounded-xl bg-white shadow-md'>
      <div className='flex'>
        <span className='uppercase text-bold text-gray-500'>{item.title}</span>
      </div>
      <div>
        <span className='text-2xl'>{item.qty}</span>
      </div>
      <div className='flex justify-between items-center text-gray-400 '>
        <span className='text-sm lowercase underline cursor-pointer'>see all {item.title}</span>
        <span className='flex items-center justify-center w-8 h-8 rounded-md bg-green-400 text-white'>{item.icon}</span>
      </div>
    </div>
  )
}

export default Widget