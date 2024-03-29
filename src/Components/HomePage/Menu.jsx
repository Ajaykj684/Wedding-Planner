import React from 'react'
import { motion } from "framer-motion";


function Menu({setMenuBar}) {
  return (
 <>
  <section class="fixed inset-y-0 left-0 z-50 flex ">
  <div class="w-screen max-w-sm">
    <div class="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
      <div class="overflow-y-scroll  no-scrollbar">
        <header class="flex h-16 items-center justify-between pl-6">
          <span class="text-sm font-medium uppercase tracking-widest">
            Menu
          </span>

          <button
            aria-label="Close menu"
            class="h-16 w-16 border-l border-gray-200"
            type="button"
            onClick={()=> setMenuBar(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <nav
          class="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
        >
          <a href="" class="px-6 py-3"> Home </a>
          <a href="" class="px-6 py-3"> About </a>
          <a href="" class="flex items-center justify-between px-6 py-3">
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a href="" class="flex items-center justify-between px-6 py-3">
            Collections
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a href="" class="px-6 py-3"> Services </a>
          <a href="" class="px-6 py-3"> History </a>
          <a href="" class="px-6 py-3"> Contact </a>
          <a href="" class="flex items-center justify-between px-6 py-3">
            Support
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a href="" class="flex items-center px-6 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Account
          </a>
          <a href="" class="flex items-center px-6 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Careers
          </a>
          <a href="" class="px-6 py-3"> Register </a>
          <a href="/login" class="px-6 py-3"> Login </a>
          <a href="" class="px-6 py-3"> FAQs </a>
          <a href="" class="px-6 py-3"> Privacy Policy </a>
          <a href="" class="px-6 py-3"> Terms Conditions </a>
        </nav>
      </div>
    </div>
  </div>
  </section>
 </>
  )
}

export default Menu