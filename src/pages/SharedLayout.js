import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return <section>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </section>
}

export default SharedLayout