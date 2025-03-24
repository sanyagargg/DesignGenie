import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import React from 'react'

function EmptyState() {
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
        <Image src = {'/emptystate.png'} width = {200} height = {200} />
        <h2 className='font-medium text-xl text-blue-800 mt-5'>Create a New AI Interior Design for your Room</h2>
        <Button className="bg-blue-600 hover:bg-blue-500 text-white mt-8">
                + Redesign Room
        </Button>
    </div>
  )
}

export default EmptyState