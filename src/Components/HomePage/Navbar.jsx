import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MenuBarComponent from './Menu'
import { motion } from "framer-motion";



const Navbar = () => {

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [modalBoolean, setModal] = useState(false);
  const [MenuBar, setMenuBar] = useState(false);



  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleAction = () => {
    setModal(true)
    navigate('/login')
  };

 
  const handleMenu=()=>{
    if(MenuBar == true){
      setMenuBar(false)
    }
    else if (MenuBar == false)
    {setMenuBar(true)}
  }

  
  return (
    <>
    <motion.div
      className="motions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
    {MenuBar && <MenuBarComponent setMenuBar={setMenuBar}/>}
    <header aria-label="Site Header" class="border-b border-gray-100">
  <div
    class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8 bg-red-600 sticky top-0"
  >
    <div class="flex items-center">
      <button type="button" class="p-2 sm:mr-4 " onClick={()=>handleMenu()}>
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="text-lg font-semibold	text-white font-serif md:ml-16 cursor-pointer">
          <a onClick={()=>navigate('/')}>Wedding Planner</a>
      </div>
    </div>

    <div class="flex flex-1 items-center justify-end">
      <nav
        aria-label="Site Nav"
        class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
      >
        <a
          href="/about"
          class="block h-16 text-white border-b-4 border-transparent leading-[4rem] hover:border-gray-900 hover:text-gray-900"
        >
          About
        </a>

        <a
          href="/news"
          class="block h-16 text-white border-b-4 border-transparent leading-[4rem] hover:border-gray-900 hover:text-gray-900"
        >
          News
        </a>

        <a
          href="/products"
          class="block h-16 text-white border-b-4 border-transparent leading-[4rem] hover:border-gray-900 hover:text-gray-900"
        >
          Products
        </a>

        <a
          href="/contact"
          class="block h-16 text-white border-b-4 border-transparent leading-[4rem] hover:border-gray-900 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>

      <div class="ml-8 flex items-center">
        <div
          class="flex items-center divide-x divide-gray-100 border-x border-gray-100"
        >
          <span>
            <a
              href="/cart"
              class="block border-b-4 border-transparent p-6 hover:border-gray-900"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span class="sr-only">Cart</span>
            </a>
          </span>

          <span>
            <a
              href="/account"
              class="block border-b-4 border-transparent p-6 hover:border-gray-900"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span class="sr-only"> Account </span>
            </a>
          </span>


          <span class="hidden sm:block">
            <a
              href="/search"
              class="block border-b-4 border-transparent p-6 hover:border-gray-900"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <span class="sr-only"> Search </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</header>

    </motion.div>
    </>
  );
};

export default Navbar;
