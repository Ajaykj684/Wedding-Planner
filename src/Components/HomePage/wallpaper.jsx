import React from "react";
import { motion } from "framer-motion";

function wallpaper() {
  return (
    <motion.div
      className=" text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <section class="relative bg-[url(https://assets.cntraveller.in/photos/6225a22e5934c6bf974e2a90/master/pass/Udaipur-saanchi-wedding%207.jpg)] bg-cover bg-center bg-no-repeat">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl">
                Let us plan your
                <strong class="block font-extrabold text-rose-700">
                  Wedding Day.
                </strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  class="group relative inline-flex items-center overflow-hidden rounded bg-rose-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-rose-500 "
                  href="/download"
                >
                  <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span class="text-sm font-medium transition-all group-hover:mr-4">
                    Get Started
                  </span>
                </a>

                <a
                  href="#"
                  class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default wallpaper;
