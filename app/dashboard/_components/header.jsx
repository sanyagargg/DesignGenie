import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <Image src = {'/logo.svg'} width ={40} height = {40} />
    </div>
  )
}

export default Header