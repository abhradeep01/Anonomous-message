import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer'

function Layout() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout