import React from 'react'
import Header from './_components/header'

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default DashboardLayout