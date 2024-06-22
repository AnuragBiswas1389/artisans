function Addressbook() {
  return (
    <>
      <div class="relative h-96 shadow-xl flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md  z-10 translate-y-0 relative">
        <div>
          <input
            type="radio"
            className="absolute right-3 top-3 h-6 w-6 border-green-600  focus:ring-green-600 shadow-xl rounded-xl"
            checked
            // onClick={handelDefaultSelection}
          ></input>
        </div>
        <div class="p-6 text-center">
          <h5 class="antialiased tracking-normal font-sans text-2xl font-bold leading-snug text-green-500 flex justify-center mt-2 mb-2">
            Default Address
          </h5>
          <h3 class="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 flex justify-center mt-5 mb-2">
            Ramnagar 2, 3rd crossing, kerchoumany
          </h3>
          <ul class="flex flex-col items-center justify-start gap-3 pt-3 mt-2 mb-5">
            <div class="">
              <li class="flex items-center gap-1 text-gray-700">
                <p class="block antialiased font-sans text-base leading-relaxed font-bold text-inherit">
                  Pincode:
                </p>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-inherit">
                  799002
                </p>
              </li>
              <li class="flex items-center gap-1 pt-2 text-gray-700">
                <p class="block antialiased font-sans text-base leading-relaxed font-bold text-inherit">
                  State:
                </p>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-inherit">
                  Tripura
                </p>
              </li>
              <li class="flex items-center gap-1 pt-2 text-gray-700">
                <p class="block antialiased font-sans text-base leading-relaxed font-bold text-inherit">
                  City:
                </p>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-inherit">
                  Agartala
                </p>
              </li>
              <li class="flex items-center gap-1 pt-2 text-gray-700">
                <p class="block antialiased font-sans text-base leading-relaxed font-bold text-inherit">
                  Phone:
                </p>
                <p class="block antialiased font-sans text-base leading-relaxed font-normal text-inherit">
                  8258957401
                </p>
              </li>
            </div>
          </ul>

          <div className="flex">
            <button
              class="align-middle select-none font-sans font-bold rounded-l-lg text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6  bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4"
              type="button"
            >
              Edit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>

            <button
              class="align-middle rounded-r-lg select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-green-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4"
              type="button"
            >
              Delete
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addressbook;
