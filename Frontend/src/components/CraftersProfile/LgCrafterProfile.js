function LgCrafterProfile(props) {
  return (
    <section class="hidden sm:block mt-10">
      <hr className="my-4 border-t border-green-600" />
      <div className=" mt-3">
        <h1 className="max-w-sm text-3xl font-bold text-black">Craftsperson</h1>
      </div>
      <div class="bg-white h-96 flex items-center justify-center p-2">
        <div class="bg-white p-8 rounded-lg border border-green-600 max-w-md w-full">
          {/* <!-- Banner Profile --> */}
          <div class="relative">
            <img
              src="/assets/images/image3.jpg"
              alt="Banner Profile"
              class="h-28 w-full rounded-t-lg"
            />
            <img
              src="/assets/images/image1.jpg"
              alt="Profile Picture"
              class="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          {/* <!-- User Info with Verified Button --> */}
          <div class="flex items-center mt-4">
            <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
            <button class=" px-2 py-1 rounded-full">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 536.541 536.541"
                stroke="#4d9aff"
                fill="green"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M496.785,152.779c-3.305-25.085-16.549-51.934-38.826-74.205c-22.264-22.265-49.107-35.508-74.186-38.813 c-11.348-1.499-26.5-7.766-35.582-14.737C328.111,9.626,299.764,0,268.27,0s-59.841,9.626-79.921,25.024 c-9.082,6.965-24.235,13.238-35.582,14.737c-25.08,3.305-51.922,16.549-74.187,38.813c-22.277,22.271-35.521,49.119-38.825,74.205 c-1.493,11.347-7.766,26.494-14.731,35.57C9.621,208.422,0,236.776,0,268.27s9.621,59.847,25.024,79.921 c6.971,9.082,13.238,24.223,14.731,35.568c3.305,25.086,16.548,51.936,38.825,74.205c22.265,22.266,49.107,35.51,74.187,38.814 c11.347,1.498,26.5,7.771,35.582,14.736c20.073,15.398,48.421,25.025,79.921,25.025s59.841-9.627,79.921-25.025 c9.082-6.965,24.234-13.238,35.582-14.736c25.078-3.305,51.922-16.549,74.186-38.814c22.277-22.27,35.521-49.119,38.826-74.205 c1.492-11.346,7.766-26.492,14.73-35.568c15.404-20.074,25.025-48.422,25.025-79.921c0-31.494-9.621-59.848-25.025-79.921 C504.545,179.273,498.277,164.126,496.785,152.779z M439.256,180.43L246.477,373.209l-30.845,30.846 c-8.519,8.52-22.326,8.52-30.845,0l-30.845-30.846l-56.665-56.658c-8.519-8.52-8.519-22.326,0-30.846l30.845-30.844 c8.519-8.519,22.326-8.519,30.845,0l41.237,41.236L377.561,118.74c8.52-8.519,22.326-8.519,30.846,0l30.844,30.845 C447.775,158.104,447.775,171.917,439.256,180.43z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          {/* <!-- Bio --> */}
          <p class="text-gray-700 mt-2">
            {" "}
            Web Developer | Cat Lover | Coffee Enthusiast{" "}
          </p>
          {/* <!-- Social Links --> */}
          <div class="flex items-center mt-4 space-x-4">
            <a href="#" class="text-green-600 hover:underline">
              {" "}
              Twitter{" "}
            </a>
            <a href="#" class="text-green-600 hover:underline">
              {" "}
              GitHub{" "}
            </a>
            <a href="#" class="text-green-600 hover:underline">
              {" "}
              LinkedIn{" "}
            </a>
          </div>
          {/* <!-- Separator Line --> */}
          <hr class="my-4 border-t border-green-600" />
          {/*  {/* <!-- Stats --> */}
          <div class="flex justify-between text-gray-600 mx-2">
            <div class="text-center">
              <span class="block font-bold text-lg">1.5k</span>
              <span class="text-xs">Visitors</span>
            </div>
            <div class="text-center">
              <span class="block font-bold text-lg">120</span>
              <span class="text-xs">Orders</span>
            </div>
            <div class="text-center">
              <span class="block font-bold text-lg">30</span>
              <span class="text-xs">Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LgCrafterProfile;
