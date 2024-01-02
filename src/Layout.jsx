import React from 'react'
import {Navbar,Footer} from './exx'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <main className='bg-background min-h-screen flex flex-col justify-between'>
        <Navbar />
        <Outlet />
        <Footer /> 
    </main>
  )
}

export default Layout