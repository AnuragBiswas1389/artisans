function BuyBox(props) {
  return (
    <div class="mt-6 ">
      <div class="mt-3 flex flex-row items-baseline justify-evenly space-y-4 border-t sm:border-b border-green-600 py-4 sm:flex-row sm:space-y-0">
        <button
          type="button"
          class="inline-flex items-center justify-center h-12 w-30 p-2 rounded-2xl border-2 border-transparent bg-green-600 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          {/* <!-- remove the a tag with action --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="shrink-0 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Add to cart
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center h-12 w-3/5 max-w-md p-2 rounded-2xl border-2 border-transparent bg-green-600 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="shrink-0 mr-3 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default BuyBox
