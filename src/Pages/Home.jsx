import React,{useState, useEffect} from 'react'
import Navbar from '../Components/HomePage/Navbar'
import NavbarSecond from '../Components/HomePage/NavbarSecond'
import Wallpaper from '../Components/HomePage/wallpaper'
import Screen1 from '../Components/HomePage/screen1'
import Footer from '../Components/HomePage/footer'
import Scroll from '../Components/HomePage/Scroll'
import LoadingSpinner from '../Components/Loader/loader'
import SearchSection from '../Components/utilities/SearchSection'



function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  
  }, [])
  
  return (
    <>
    {isLoading ? <LoadingSpinner /> : 
    <>
      <Navbar/>
      <NavbarSecond/>
      <Wallpaper/>
      {/* <Menu /> */}
      <SearchSection />
      <Screen1/>
      {/* <Divider sx={{m:2}}/> */}
      <Scroll/>
      <Footer/>
    </>
  }
    </>
  )
}

export default Home