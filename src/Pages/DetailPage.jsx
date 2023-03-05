import React, { useState, useEffect } from "react";
import Navbar from "../Components/HomePage/Navbar";
import NavbarSecond from "../Components/HomePage/NavbarSecond";
import Footer from "../Components/HomePage/footer";
import LoadingSpinner from "../Components/Loader/loader";
import DetailPageComponent from "../Components/DetailPage/DetailPage";

function DetailPage() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return(
  <>
    {isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <Navbar />
        <NavbarSecond />
        <DetailPageComponent />
        <Footer />
      </>
    )}
  </>
  )
}

export default DetailPage;
