"use client" // Ensures this component runs on the client side
import Image from 'next/image'
import React, { useState } from 'react'

function ImageUpload(selectedImage) {
  // State to store the selected image file
  const [file, setFile] = useState(null);

  // Function to handle file selection
  const onFileSelected = (event) => {
    console.log(event.target.files[0]); // Log the selected file to the console
    setFile(event.target.files[0]); // Update the state with the selected file
    selectedImage(event.target.files[0]) //send selected file image to the parent component
  };

  return (
    <div>
      {/* Label for input field */}
      <label className='text-blue-800'>Select Image of Your Room</label>

      <div className='mt-3'>
        {/* Label wraps the div to make it clickable */}
        <label htmlFor='upload-image'>
          {/* 
            Container for the upload box.
            - Has a default padding (p-8) for empty state.
            - When an image is uploaded (file exists), padding is removed (p-0).
            - The border is dotted and turns into a shadow effect on hover.
          */}
          <div 
            className={`border rounded-xl border-dotted flex justify-center border-purple-400 bg-white 
                        cursor-pointer hover:shadow-lg ${file ? 'p-0' : 'p-8'}  ${file ? '' : 'h-70'} `} // Added h-70 for larger container height`}
          >
            {/* 
              If no file is selected, show default upload image.
              Otherwise, display the uploaded image using URL.createObjectURL(file)
            */}
            {!file ? (
              <Image src="/imageupload.jpeg" width={150} height={200} alt="default" />
            ) : (
              <Image 
                src={URL.createObjectURL(file)} // Convert file object to a temporary URL
                width={300} height={300} 
                alt="userimage" 
                className='w-[300px] h-[300px] object-cover' // Ensures the image fills the container
              />
            )}
          </div>
        </label>

        {/* 
          Hidden file input 
          - Accepts only images
          - Triggered when user clicks the upload box
          - Calls onFileSelected function when file is chosen
        */}
        <input 
          type="file" 
          accept="image/*"
          id="upload-image"
          style={{ display: "none" }} // Hides default input UI
          onChange={onFileSelected} // Calls function when a file is selected
        />
      </div>
    </div>
  );
}

export default ImageUpload;
