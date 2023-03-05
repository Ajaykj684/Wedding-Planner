import React from "react";

function RequestPricing({ setModalRequestPricing }) {
  return (
    <>
      <div
        className="relative z-10 "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-xs">
          <div className=" flex min-h-full items-end justify-center p-4  items-center sm:p-0 ">
            <section class="bg-gray-100">
              <div class="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                  <div class="lg:col-span-2 lg:py-12 text-center">
                    <p class="max-w-xl text-lg">
                      At the same time, the fact that we are wholly owned and
                      totally independent from manufacturer and other group
                      control gives you confidence that we will only recommend
                      what is right for you.
                    </p>

                    <div class="mt-8">
                      <a href="" class="text-2xl font-bold text-pink-600">
                        0151 475 4450
                      </a>

                      <address class="mt-2 not-italic">
                        282 Kevin Brook, Imogeneborough, CA 58517
                      </address>
                    </div>
                  </div>

                  <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <div>
                    <p class=" not-italic text-gray-400 text-sm">
                        282 Kevin Brook, Imogeneborough, CA 58517
                    </p>
                    <p class="text-black text-lg font-semibold mt-2">
                       Request Pricing
                    </p>
                    <p class="mt-2 not-italic text-gray-400 text-sm">
                    Fill this form and SOTC For Holidays, Thiruvananthapuram will contact you shortly. All the information provided will be treated confidentially.
                    </p>
                    </div>
                    <form action="" class="space-y-4 mt-5">
                      <div>
                        <label class="sr-only" for="name">
                          Name
                        </label>
                        <input
                          class="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-400"
                          placeholder="Name"
                          type="text"
                          id="name"
                        />
                      </div>

                      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label class="sr-only" for="email">
                            Email
                          </label>
                          <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-400"
                            placeholder="Email address"
                            type="email"
                            id="email"
                          />
                        </div>

                        <div>
                          <label class="sr-only" for="phone">
                            Phone
                          </label>
                          <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm border border-gray-400"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                          />
                        </div>
                      </div>

                      <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                        <div>
                          <input
                            class="peer sr-only border border-gray-400"
                            id="option1"
                            type="radio"
                            tabindex="-1"
                            name="option"
                            
                          />

                          <label
                            for="option1"
                            class="block w-full rounded-lg border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            tabindex="0"
                          >
                            <span class="text-sm font-medium"> Option 1 </span>
                          </label>
                        </div>

                        <div>
                          <input
                            class="peer sr-only"
                            id="option2"
                            type="radio"
                            tabindex="-1"
                            name="option"
                          />

                          <label
                            for="option2"
                            class="block w-full rounded-lg border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            tabindex="0"
                          >
                            <span class="text-sm font-medium"> Option 2 </span>
                          </label>
                        </div>

                        <div>
                          <input
                            class="peer sr-only"
                            id="option3"
                            type="radio"
                            tabindex="-1"
                            name="option"
                          />

                          <label
                            for="option3"
                            class="block w-full rounded-lg border border-gray-400 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                            tabindex="0"
                          >
                            <span class="text-sm font-medium"> Option 3 </span>
                          </label>
                        </div>
                      </div>
                      <div>
                        

           

                      <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
</div>

                      </div>

                      <div>
                        <label class="sr-only" for="message">
                          Message
                        </label>

                        <textarea
                          class="w-full rounded-lg border border-gray-400 p-3 text-sm"
                          placeholder="Message"
                          rows="6"
                          id="message"
                          defaultValue="Hi there - we found you on WeddingWire and would love more information about your services and packages!"
                        ></textarea>
                      </div>

                      <div class="mt-4 flex justify-center">
                        <button
                          type="submit"
                          class="inline-block w-full rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
                        >
                          Send Enquiry
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestPricing;
