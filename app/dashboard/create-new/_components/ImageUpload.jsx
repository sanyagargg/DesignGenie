import React from 'react'

function ImageUpload() {
  return (
    <div>
      <label className='text-blue-800'>Select Image of Your Room</label>
      <div>
        <input type = "file" accept="image/*" />
      </div>
    </div>
  )
}

export default ImageUpload