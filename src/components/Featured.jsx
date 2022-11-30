import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


const Featured = () => {
  return (
    <div className='flex flex-col bg-white p-2 shadow-md'>
      <div className='flex items-center justify-between text-gray-600 mb-2'>
        <h3>Total Revenue</h3>
        <MoreHorizIcon className='cursor-pointer' />
      </div>
      <div className='felx items-center justify-center mb-3'>
        <CircularProgressbar value={70} text={"70%"} className=" h-40" />
      </div>
      <div className='text-center'>
        <p className='text-gray-600 text-sm'>Total sales made today</p>
        <h1 className='text-4xl m-2'>$6853</h1>
        <p className='text-gray-600 text-sm'>Previous transcation processing. Last payment may not be included.</p>
      </div>
      <div className="flex justify-around gap-5">
        <div>
          <div>Target</div>
          <div className='text-red-700'>$ 23.5K</div>
        </div>
        <div>
          <div>Last Week</div>
          <div className='text-green-600'>$ 18.5K</div>
        </div>
        <div>
          <div>Last Month</div>
          <div className='text-cyan-400'>$ 34.5K</div>
        </div>
      </div>
    </div>
  )
}

export default Featured