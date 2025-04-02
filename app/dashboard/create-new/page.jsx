"use client"
import React, { useState } from 'react'
import Layout from '../_components/layout'
import ImageUpload from './_components/ImageUpload'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '../../../components/ui/button'

function CreateNew() {
  // Store form data correctly as an object
  const [formData, setFormData] = useState({}); 

  const onHandleInputChange = (value, fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Log updated form data
    console.log({ ...formData, [fieldName]: value }); 
  };

  return (
    <Layout>
        <div>
            <h2 className='text-center mt-2 text-2xl font-bold text-blue-700'>Experience the Magic of AI Remodeling</h2>
            <p className='text-center mt-2 text-gray-600'>Transform any room with a click. Save a space, choose a style, and watch as AI instantly instantly reimagines your environment</p>

            <div className= 'grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
              {/* Image Upload Section */}
              <ImageUpload selectedImage={(value) => onHandleInputChange(value, 'image')} />
              
              {/* Form input Section */}
              <div>
                {/* Room Type */}
                <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />

                {/* Design Type */}
                <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />

                {/* Additional Requirements */}
                <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} /> 
                
                {/* Button to Generate Image */}
                <Button className='w-full mt-5 bg-blue-700 hover:bg-blue-500 text-white'>Generate</Button>
                <p className='text-sm text-gray-700 mt-5 mb-30'>Note: 1 credit will be used to redesign your room</p>
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default CreateNew;
