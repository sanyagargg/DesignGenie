import Image from 'next/image'
import React from 'react'

function ImageUpload() {
  return (
    <div>
      <label className='text-blue-800'>Select Image of Your Room</label>
      <div className='mt-3'>
        <label htmlFor='upload-image'>
          <div className={'p-8 w-80 border rounded-xl border-dotted flex justify-center border-purple-400 bg-white cursor-pointer hover:shadow-lg '}>
            <Image src= "/imageupload.jpeg" width={150} height={150}/>
          </div>
        </label>
        <input type = "file" accept="image/*" 
        id= "upload-image"
        style ={{display:"none"}}
        />
      </div>
    </div>
  )
}

export default ImageUpload