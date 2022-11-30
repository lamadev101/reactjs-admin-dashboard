import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const AddNew = ({ title, inputs }) => {
  const [file, setFile] = useState("")
  
  return (
    <div className='w-full p-4 bg-white shadow-md'>
      <h1 className='text-gray-400 text-xl font-bold'>Add new {title}</h1>
      <div className='flex justify-between items-center gap-4'>
        {/* Image */}
        <div className='w-1/4'>
          <img className='w-60 h-60' src={file ? URL.createObjectURL(file) : "https://ionicframework.com/docs/img/demos/thumbnail.svg"} alt="" />
        </div>

        {/* Form */}
        <div className='w-3/4 p-2'>
          <form action="" className='w-full flex items-center flex-row flex-wrap'>
            <div className='w-1/2 pl-3'>
              <label htmlFor="file">Image: <AddPhotoAlternateIcon className='cursor-pointer text-gray-700' /></label>
              <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display: "none"}} />
            </div>

            {inputs.map(input=>(
              <div key={input.id} className='flex flex-col w-1/2 pl-3 mb-3'>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} className="h-9 outline-none border-b-2 border-slate-500" />
              </div>
            ))}
            <button className='bg-teal-600 h-9 border-0 w-20 text-white text-bold mt-2 ml-2'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddNew