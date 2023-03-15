import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const itemData = [
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",

    title: "Breakfast",
    startingPrice: "2999",
    endPrice: "5999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "7699",
    endPrice: "14999",
  },

  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "1999",
    endPrice: "8999",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "5499",
    endPrice: "12999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "7699",
    endPrice: "14999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
  {
    img: "https://wallpaperaccess.com/full/4055163.jpg",
    title: "Breakfast",
    startingPrice: "1999",
    endPrice: "8999",
  },
  {
    img: "https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2079.jpg?w=2000",
    title: "Breakfast",
    startingPrice: "62999",
    endPrice: "87000",
  },
];

export default function ImgMediaCard() {
  

  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/detailPage/:serviceId");
  };

  return (
    <>
      <motion.div
        className="motions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {itemData.map((item) => (
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 " onClick={()=>handlePage()}>
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 5 }}
                    transition={{ duration: 0.8 }}
                  >
                    <a href="#">
                      <img
                        alt="Placeholder"
                        class="block h-full w-full"
                        src={item.img}
                      />
                    </a>
                  </motion.button>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:text-red-700 text-black"
                        href="#"
                      >
                        O'by thamara
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">11/1/19</p>
                  </header>

                  <footer class=" leading-none p-2 md:p-2">
                    <a
                      class="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" /> */}
                      <p class="ml-2 text-sm">
                        requires a valid value to be accessible. Provide a
                        valid, navigable address as the href value.
                      </p>
                    </a>
                    <p class="ml-2 text-sm mt-4">
                      {item.startingPrice} - {item.endPrice}
                    </p>
                    <button class="bg-white border border-red-600 hover:bg-red-800 hover:text-white w-[100%] mt-4 mb-3 text-red-600 text-sm font-medium py-2 px-4 rounded-sm">
                      Request Pricing
                    </button>
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
