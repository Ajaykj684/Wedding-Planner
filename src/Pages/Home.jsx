import React from 'react'
import Navbar from '../Components/HomePage/Navbar'
import NavbarSecond from '../Components/HomePage/NavbarSecond'
import Wallpaper from '../Components/HomePage/wallpaper'
import Screen1 from '../Components/HomePage/screen1'
import Footer from '../Components/HomePage/footer'
import Scroll from '../Components/HomePage/Scroll'
import Divider from '@mui/material/Divider';



function home() {
  return (
    <>
    <Navbar/>
    <NavbarSecond/>
    <Wallpaper/>
    <Screen1/>
    <Divider sx={{m:2}}/>
    <Scroll/>
    <Footer/>
    </>
  )
}

export default home