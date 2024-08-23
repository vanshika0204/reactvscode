import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout