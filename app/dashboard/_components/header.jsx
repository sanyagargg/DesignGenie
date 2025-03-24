import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm flex justify-between items-centre'>
        <div className='flex gap-2 items-center'>
            <Image src = {'/logo.svg'} width ={40} height = {40} alt="Logo" />
            <h2 className='font-bold text-lg text-blue-700'>DesignGenie</h2>
        </div>

        
        <div className= 'flex gap-10 items-center'>
            <div className= 'flex gap-2 p-1 items-center bg-slate-100 px-3 rounded-full'>
                <Image src = {'/star.svg'} width = {20} height = {20} alt="Credits" />
                <h3>3</h3>
            </div>
                <UserButton/>
        </div>
    </div>
  )
}

export default Header