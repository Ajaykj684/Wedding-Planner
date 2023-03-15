import React from "react";
import Cards from "./cards/Cards";
import Pagination from "./Pagination";
import LeftDropdown from "./LeftDropdown";
import LeftSideCard from "./LeftSideCard";
import { motion } from "framer-motion";


function screen1() {
  return (
    <>
      <motion.div
        className="motions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        
        <div class="sm:flex">
          <div className="sm:w-[30%] sm:m-8 md:mx-16 xxs:m-4">
            <LeftDropdown />
            <div className="xxs:hidden sm:block"> 
            <LeftSideCard
              children={"https://pbs.twimg.com/media/D72NbbAXoAAvFhu.jpg"}
            />
            <LeftSideCard
              children={
                "https://i.pinimg.com/originals/a1/16/b7/a116b7f465a4ef481db6174a38b2383b.png"
              }
            />
            </div>
          </div>
          <div>
            <Cards />
            <Pagination />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default screen1;
