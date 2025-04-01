"use client"
import React from 'react'
import Layout from '../_components/layout'
import ImageUpload from './_components/ImageUpload'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'


function CreateNew() {

  const onHandleInputChange=(value, fieldName)=>{

  }
  return (
    <Layout>
        <div>
            <h2 className='text-center mt-10 text-3xl font-bold text-blue-800'>Experience the Magic of AI Remodeling</h2>
            <p className='text-center mt-2 text-gray-600'>Transform any room with a click. Save a space, choose a style, and watch as AI instantly instantly reimagines your environment</p>

            <div className= 'grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
              {/* Image Upload Section */}
              <ImageUpload selectedImage={(value)=>onHandleInputChange(value,'image')} />
              {/* Form input Section */}
              <div>
                {/*Room Type*/}
                <RoomType selectedRoomType={(value)=>onHandleInputChange(value,'roomType')}/>

                {/*Design Type*/}
                <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')} />

                {/*Additional Requirements TextArea (Optional) */}

                {/*Button to Generate Image*/}
              </div>

            </div>

        </div>

        
    </Layout>
  )
}

export default CreateNew