function Footer(props) {
  return (
    <footer class="mt-10">
      <footer class="bg-grey lg:grid lg:grid-cols-5">
        {/* {/* <!-- footer image for larger screens --> */}
        <div class=" hidden lg:block relative h-32 lg:col-span-2 lg:h-full">
          <img
            src="/assets/images/footerImage.jpg"
            alt=""
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div class=" mx-0 sm:py-0 sm:mx-0 lg:col-span-3 lg:px-0">
          <div class=" bg-gray-900 flex   flex-row justify-between  gap-6 ">
            <div class="px-2 sm:mx-4 pt-4 ">
              <p>
                <span class="text-xs uppercase tracking-wide text-white">
                  {" "}
                  Call us{" "}
                </span>

                <a
                  href="#"
                  class="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl"
                >
                  0123456789
                </a>
              </p>
              <ul class="mt-8 space-y-1 text-sm text-white">
                <li>Monday to Friday: 10am - 5pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>
            </div>

            <div class="grid pr-2 grid-cols-1 gap-4 sm:grid-cols-2 py-4">
              <div>
                <p class="font-medium text-white">Services</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      {" "}
                      Company Review{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-white transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- This is an bottom app advert. component --> */}
          <div class=" bg-gray-900">
            <ul class="pt-4 w-full justify-evenly items-center flex flex-row gap-5 ">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-white transition hover:opacity-75"
                >
                  <span class="sr-only">Facebook</span>

                  <svg
                    class="h-8 w-8 sm:h-10 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-white transition hover:opacity-75"
                >
                  <span class="sr-only">Instagram</span>

                  <svg
                    class="h-8 w-8 sm:h-10 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-white transition hover:bg-green-600"
                >
                  <span class="sr-only">x</span>

                  <svg
                    class="h-8 w-8 sm:h-10 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-white transition hover:opacity-75"
                >
                  <span class="sr-only">Youtube</span>
                  <svg
                    class="h-8 w-8 sm:h-10 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M24.40234,9c-6.60156,0 -12.80078,0.5 -16.10156,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.39844,2.39844 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.50391,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.59766,-0.5 16.09766,-1.19922c2.20313,-0.5 4.10156,-2 4.5,-4.30078c0.40234,-2.5 0.90234,-6.09766 1,-10.59766c0,-4.5 -0.5,-8.10156 -1,-10.60156c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.5,-0.5 -9.59766,-1 -16.19531,-1zM24.40234,11c7.19922,0 12.99609,0.59766 15.79688,1.09766c1.5,0.40234 2.69922,1.40234 2.89844,2.70313c0.60156,3.19922 1,6.60156 1,10.10156c-0.09766,4.29688 -0.59766,7.79688 -1,10.29688c-0.29687,1.89844 -2.29687,2.5 -2.89844,2.70313c-3.60156,0.69922 -9.60156,1.19531 -15.60156,1.19531c-6,0 -12.09766,-0.39844 -15.59766,-1.19531c-1.5,-0.40234 -2.69922,-1.40234 -2.89844,-2.70312c-0.80078,-2.80078 -1.10156,-6.5 -1.10156,-10.19922c0,-4.60156 0.40234,-8 0.80078,-10.09766c0.30078,-1.90234 2.39844,-2.50391 2.89844,-2.70312c3.30078,-0.69922 9.40234,-1.19922 15.70313,-1.19922zM19,17v16l14,-8zM21,20.40234l8,4.59766l-8,4.59766z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-white transition hover:opacity-75"
                >
                  <span class="sr-only">Whatsapp</span>
                  <svg
                    class="h-7 w-7 sm:h-10 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="6"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,2c-12.7,0 -23,10.3 -23,23c0,4.1 1.1,7.89922 3,11.19922l-3,10.5c-0.1,0.3 -0.00078,0.7 0.19922,1c0.3,0.3 0.7,0.30078 1,0.30078l11,-2.69922c3.2,1.7 6.90078,2.69922 10.80078,2.69922c12.7,0 23,-10.3 23,-23c0,-12.7 -10.3,-23 -23,-23zM25,4c11.6,0 21,9.4 21,21c0,11.6 -9.4,21 -21,21c-3.7,0 -7.19922,-0.99922 -10.19922,-2.69922c-0.2,-0.1 -0.50117,-0.20156 -0.70117,-0.10156l-9.59961,2.40039l2.5,-9.19922c0.1,-0.3 0.00039,-0.50078 -0.09961,-0.80078c-1.8,-3.1 -2.90039,-6.69961 -2.90039,-10.59961c0,-11.6 9.4,-21 21,-21zM18.11328,12.98828c-0.1875,-0.0125 -0.3125,0.01172 -0.3125,0.01172h-1.20117c-0.6,0 -1.49883,0.2 -2.29883,1c-0.5,0.5 -2.30078,2.3 -2.30078,5.5c0,3.4 2.29961,6.29961 2.59961,6.59961c0,0 0.40039,0.50117 0.90039,1.20117c0.5,0.7 1.19961,1.5 2.09961,2.5c1.8,1.9 4.3,4.09844 7.5,5.39844c1.4,0.6 2.6,1.00078 3.5,1.30078c1.6,0.5 3.10117,0.40078 4.20117,0.30078c0.8,-0.1 1.69961,-0.50156 2.59961,-1.10156c0.9,-0.6 1.79922,-1.29883 2.19922,-2.29883c0.3,-0.8 0.4,-1.49961 0.5,-2.09961v-0.80078c0,-0.3 -0.09883,-0.29922 -0.29883,-0.69922c-0.5,-0.8 -1.00156,-0.8 -1.60156,-1c-0.3,-0.2 -1.2,-0.6 -2,-1c-0.9,-0.4 -1.59961,-0.8 -2.09961,-1c-0.3,-0.1 -0.69922,-0.30117 -1.19922,-0.20117c-0.5,0.1 -1.00078,0.40039 -1.30078,0.90039c-0.3,0.4 -1.39883,1.79922 -1.79883,2.19922l-0.10156,-0.09961c-0.4,-0.2 -0.99922,-0.39883 -1.69922,-0.79883c-0.8,-0.4 -1.70078,-1 -2.80078,-2c-1.6,-1.4 -2.7,-3.10117 -3,-3.70117c0.3,-0.4 0.70039,-0.79961 0.90039,-1.09961c0.1,-0.1 0.18125,-0.20078 0.25,-0.30078c0.06875,-0.1 0.12578,-0.19883 0.17578,-0.29883c0.1,-0.2 0.17539,-0.39961 0.27539,-0.59961c0.4,-0.7 0.2,-1.50039 0,-1.90039c0,0 -0.10078,-0.29961 -0.30078,-0.59961c-0.1,-0.3 -0.3,-0.80117 -0.5,-1.20117c-0.4,-0.9 -0.8,-1.9 -1,-2.5c-0.3,-0.7 -0.69922,-1.20039 -1.19922,-1.40039c-0.25,-0.15 -0.5,-0.19844 -0.6875,-0.21094zM16.59961,15h1.09961h0.20117c0,0 0.09922,0.10039 0.19922,0.40039c0.2,0.6 0.7,1.6 1,2.5c0.2,0.4 0.4,0.89922 0.5,1.19922c0.1,0.3 0.20078,0.50117 0.30078,0.70117c0,0.1 0.09961,0.09961 0.09961,0.09961c-0.2,0.4 -0.2,0.49883 -0.5,0.79883c-0.3,0.4 -0.70078,0.8 -0.80078,1c-0.1,0.2 -0.39961,0.40078 -0.59961,0.80078c-0.2,0.4 -0.09883,1.09961 0.20117,1.59961c0.4,0.6 1.6,2.60078 3.5,4.30078c1.2,1.1 2.29922,1.79922 3.19922,2.19922c0.9,0.5 1.60078,0.70078 1.80078,0.80078c0.4,0.2 0.79883,0.29883 1.29883,0.29883c0.5,0 0.90117,-0.39922 1.20117,-0.69922c0.4,-0.4 1.39844,-1.60039 1.89844,-2.40039l0.20117,0.09961c0,0 0.29922,0.10078 0.69922,0.30078c0.4,0.2 0.80078,0.39961 1.30078,0.59961c0.9,0.4 1.7,0.8 2,1l0.59961,0.30078v0.29883c0,0.4 -0.10078,1.00156 -0.30078,1.60156c-0.1,0.3 -0.69883,0.89883 -1.29883,1.29883c-0.7,0.4 -1.50078,0.70078 -1.80078,0.80078c-0.9,0.1 -1.99883,0.19883 -3.29883,-0.20117c-0.8,-0.3 -1.90078,-0.59922 -3.30078,-1.19922c-2.8,-1.2 -5.10078,-3.2 -6.80078,-5c-0.8,-0.9 -1.5,-1.70078 -2,-2.30078c-0.5,-0.6 -0.69844,-0.99922 -0.89844,-1.19922c-0.4,-0.4 -2.30078,-3.00039 -2.30078,-5.40039c0,-2.5 1.20078,-3.49922 1.80078,-4.19922c0.3,-0.4 0.69883,-0.40039 0.79883,-0.40039z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
            {/* <!-- jon skillacart card --> */}
            <section>
              <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                <div class="flex flex-col items-center gap-4 rounded-lg bg-green-600 p-6 shadow-lg sm:flex-row sm:justify-between">
                  <strong class="text-xl text-center text-white sm:text-xl">
                    {" "}
                    Join{" "}
                    <p class="inline-block text-2xl font-extrabold">
                      skillacart
                    </p>{" "}
                    and let your crafts be know!{" "}
                  </strong>
                  {/* <!-- join now button --> */}
                  <a
                    class="inline-flex items-center gap-2 rounded-full  bg-white px-8 py-3 text-green-600 hover:bg-transparent hover:text-white focus:outline-none focus:bg-orange active:bg-orange"
                    href="/"
                  >
                    <span class="text-sm font-medium"> Let's Get Started </span>

                    <svg
                      class="h-5 w-5 rtl:rotate-180"
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
                  </a>
                </div>
              </div>
            </section>
            {/* <!-- download app section --> */}
            <div class="max-w-2xl mx-auto text-white py-2">
              <div class="text-center mb-4">
                <h3 class="hidden sm:block text-2xl sm:text-3xl mb-2">
                  {" "}
                  Download our app{" "}
                </h3>
                <p class="hidden sm:block mb-4 ">
                  & Let your crafts be know !{" "}
                </p>
                <div class=" flex justify-evenly sm:justify-center  my-2 sm:my-4">
                  <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                      class="w-7 md:w-8"
                    />
                    <div class="text-left ml-3">
                      <p class="text-xs text-gray-200">Download on </p>
                      <p class="text-sm md:text-base"> Google Play Store </p>
                    </div>
                  </div>
                  <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                      class="w-7 md:w-8"
                    />
                    <div class="text-left ml-3">
                      <p class="text-xs text-gray-200">Download on </p>
                      <p class="text-sm md:text-base"> Apple Store </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-2 flex flex-col md:justify-between items-center text-sm text-gray-400">
                <div class="order-1 md:order-2">
                  <span class="px-2">
                    <a
                      href="#"
                      class="hover:text-green-600 focus::text-green-600"
                    >
                      About us
                    </a>
                  </span>
                  <span class="px-2 border-l">
                    <a href="#">Contact us</a>
                  </span>
                  <span class="px-2 border-l">
                    <a href="#">Privacy Policy</a>
                  </span>
                </div>
                <div class="order-1 md:order-2 flex w-full justify-evenly mt-2 ">
                  <p class=" text-green-600 order-2 md:order-1 mt-2 md:mt-0">
                    {" "}
                    &copy; skillacart, 2024.{" "}
                  </p>
                  <p class=" text-green-600 order-2 md:order-1 mt-2 md:mt-0">
                    {" "}
                    created with ♥ by skillacart{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer image for smaller screens--> */}
          <div class="block lg:hidden relative h-32 lg:col-span-2 lg:h-full">
            <img
              src="/assets/images/footerImage.jpg"
              alt="skillacart-let you crafts be known"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
