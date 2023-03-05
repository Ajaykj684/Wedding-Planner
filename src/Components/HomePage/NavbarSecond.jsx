import React from "react";
import { motion } from "framer-motion";

function NavbarSecond() {
  return (
    <>
      <motion.div
        className=" text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >

        <header aria-label="Site Header" class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-center">
              <div class="hidden xs:block">
                <nav aria-label="Site Nav">
                  <ul class="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        class="text-gray-500 transition text-red-700 font-semibold"
                        href="/"
                      >
                        PLANNING TOOLS
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        WEDDING VENUES
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        GROOMS
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        BRIDE
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        WEDDING VENDORS
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>

                    <li>
                      <a
                        class="text-gray-500 transition hover:text-red-700 hover:font-semibold"
                        href="/"
                      >
                        COMMUNITY
                      </a>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </motion.div>
    </>
  );
}

export default NavbarSecond;
