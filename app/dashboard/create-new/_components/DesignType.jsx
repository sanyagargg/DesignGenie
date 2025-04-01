"use client"
import Image from 'next/image'
import React, { useState } from 'react'


function DesignType({selectedDesignType}) {
    const Designs = [
        { name: 'Modern', image: '/modern.jpeg' },
        { name: 'Industrial', image: '/industrial.jpeg' },
        { name: 'Bohemian', image: '/bohemian.jpeg' },
        { name: 'Traditional', image: '/traditional.jpeg' },
        { name: 'Rustic', image: '/rustic.jpeg' },
        { name: 'Minimalist', image: '/minimalist.jpeg' }
    ]

    //whenever user selects any design we gotta save it in one state
    const [selectedOption, setSelectedOption] =useState();
    return (
        <div className='mt-5'>
            <label className='text-gray-500'>Select Interior Design Type</label>
            <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {Designs.map((design, index) => (
                    //we add an onClick event to this div
                    <div key={index} onClick={()=>{setSelectedOption(design.name);selectedDesignType(design.name)}}>
                        {/*if design name matched selected option simply add a border*/}
                        <Image 
                            src={design.image} 
                            alt={design.name} 
                            width={100} 
                            height={100} 
                            className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                                design.name === selectedOption ? 'border-2 border-purple-700 p-1' : ''
                            }`} 
                        />

                        <h2 className='text-s font-small'>{design.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignType
