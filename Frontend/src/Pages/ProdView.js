import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import CrafterProfile from "../components/CraftersProfile/CrafterProfile";
import LgCrafterProfile from "../components/CraftersProfile/LgCrafterProfile";
import PhotoReview from "../components/Review/PhotoReview/PhotoReview";
import ReviewCard from "../components/Review/ReviewCard/ReviewCard";
import Carousel from "../components/Carousel/productCarousel";
import ProductVariation from "../components/ProductVariation/ProductVariation";
import BuyBox from "../components/BuyBox/BuyBox";
import DeliveryServices from "../components/DeliveryServices/DeliveryServices";
import SectionHeader from "../components/Header/SectionHeader";
import ProductGridView from "../components/Container/ProductGridVew";
import ProductGrid from "../components/views/ProductGrid/ProductGrid";
import GridProd from "../components/ProductCard/GridProd";
import GridHeader from "../components/Header/GridHeader";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProdView(props) {
  const { productId } = useParams();
  const api = `http://192.168.29.58:8000/api/products/${productId}`;

  const [productsData, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  console.log(api);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Nav></Nav>
      <section class="md:py-20 pt-6 font-poppins">
        <div class="max-w-8xl sm:px-8  mx-2 lg:mx-auto ">
          <div class="flex flex-wrap">
            {/* this is the left stickey bar */}
            <div class="w-full px-2 mb-4 md:w-1/2 md:mb-0">
              <div class="sticky top-14 z-10 overflow-hidden pt-4">
                <div class="lg:col-span-3 lg:row-end-1">
                  {/* product image section */}
                  <section>
                    <Carousel
                      isRounded={true}
                      autoplay={false}
                      forProduct={true}
                      api={api}
                    ></Carousel>
                  </section>
                  {/* can add product preview section */}
                </div>
              </div>
            </div>
            {/* right slider bar */}
            <div class="w-full  md:w-1/2 sm:px-6 lg">
              <section class="lg:pl-4">
                <div class="mb-6 ">
                  {/* product details section */}
                  <span class="text-green-600 ">New</span>
                  {/* product title */}
                  <h1 class="max-w-xl mt-2 mb-4 text-xl font-bold md:text-3xl font-heading ">
                    {productsData.name}
                  </h1>
                  {/* offer section */}
                  <div class="text-green-600 text-md">welcome offer</div>
                  {/* price */}
                  <h1 class="max-w-md mb-2 ml-2 text-2xl font-bold ">
                    Rs. {productsData.price}
                  </h1>
                  {/* mrp section */}
                  <h3 class="max-w-md mb-4 ml-2 text-md text-neutral-500 ">
                    M.R.P
                    <p class="inline-block line-through">
                      ₹ {productsData.price + 1500}
                    </p>
                  </h3>
                  {/* authentication certificate section */}
                  <div class="flex flex-row items-center">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 800 648"
                      class="h-8 w-8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M91.8755 397.568C91.8755 436.687 329.659 436.687 329.659 397.568C329.659 364.486 291.546 319.789 240.084 306.732C261.587 292.305 276.415 263.739 276.415 238.055C276.415 201.799 247.047 172.374 210.762 172.374C174.506 172.374 145.105 201.799 145.105 238.055C145.105 263.744 159.919 292.305 181.365 306.732C130.016 319.789 91.8755 364.486 91.8755 397.568ZM205.481 325.826H205.193L194.318 313.317C199.609 315.187 205.032 316.392 210.786 316.392C216.525 316.392 221.949 315.244 227.239 313.369L216.351 325.826H216.077L244.151 393.652L210.786 426.903L177.435 393.652L205.481 325.826Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M329.659 299.594C329.659 308.106 336.461 314.951 344.974 314.951H531.053C533.472 313.227 536.316 311.673 540.204 310.582V284.26H344.974C336.504 284.26 329.659 291.119 329.659 299.594Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M540.199 214.365H344.974C336.504 214.365 329.659 221.196 329.659 229.713C329.659 238.169 336.461 245.061 344.974 245.061H540.199V214.365Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M95.2531 531.552C63.7445 531.552 38.1126 505.892 38.1126 474.426V124.861C38.1126 93.3666 63.7445 67.7346 95.2531 67.7346H540.199V29.6504H95.2531C42.7137 29.6504 0 72.3404 0 124.861V474.398C0 526.918 42.7137 569.575 95.2531 569.575H542.787L552.972 531.491H95.2531V531.552Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M727.459 32.6831V72.5104C747.711 81.3111 761.892 101.435 761.892 124.861V474.398C761.892 503.847 739.364 527.868 710.746 530.919L720.671 568.026C765.633 560.373 800.005 521.481 800.005 474.398V124.861C800 80.2341 768.997 42.9387 727.459 32.6831Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M564.362 280.741C573.394 270.013 588.954 269.361 605.956 281.142C620.227 251.155 647.38 251.183 661.674 281.114C678.676 269.332 694.208 269.984 703.268 280.741C708.762 287.269 710.949 296.514 709.972 308.971C711.063 308.862 711.724 309.146 712.763 309.084V0.669189H554.933V309.141C555.967 309.141 556.6 308.881 557.753 308.966C556.652 296.547 558.896 287.269 564.362 280.741Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M607.397 486.538C606.934 486.425 606.532 486.278 606.046 486.104C595.601 493.643 586.054 495.943 578.198 494.451L544.403 620.612L577.135 598.349L591.661 633.324L625.404 507.423C618.385 504.338 612.314 497.465 607.397 486.538Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M661.613 486.104C661.154 486.278 660.725 486.42 660.262 486.538C654.569 499.279 647.261 506.327 638.744 508.372L675.997 647.331L688.596 599.695L723.316 634.642L685.894 495.107C678.699 495.197 670.446 492.519 661.613 486.104Z"
                        fill="#00AA3B"
                      />
                      <path
                        d="M651.173 476.037C655.604 475.172 659.803 473.736 664.031 472.295C687.013 491.626 699.527 484.379 694.293 454.808C697.599 451.935 700.679 448.822 703.523 445.487C733.152 450.778 740.341 438.241 721.011 415.283C722.48 411.083 723.916 406.916 724.753 402.452C752.539 392.211 752.539 377.945 724.691 367.708C723.888 363.277 722.476 359.077 721.011 354.878C740.341 331.896 733.095 319.382 703.523 324.616C700.618 321.343 697.538 318.23 694.26 315.353C699.494 285.772 686.985 278.549 664.003 297.87C659.803 296.429 655.66 295.016 651.173 294.185C640.931 266.328 626.665 266.328 616.428 294.185C612.026 295.016 607.798 296.429 603.598 297.87C580.616 278.553 568.098 285.772 573.393 315.353C570.054 318.286 566.95 321.343 564.068 324.645C534.501 319.387 527.25 331.924 546.581 354.878C545.144 359.106 543.708 363.272 542.901 367.708C515.058 377.945 515.058 392.272 542.901 402.452C543.737 406.883 545.149 411.083 546.581 415.311C527.25 438.293 534.501 450.806 564.068 445.544C566.974 448.879 570.054 451.931 573.332 454.803C568.098 484.408 580.612 491.621 603.594 472.291C607.793 473.732 611.988 475.168 616.48 476.032C626.665 503.851 640.993 503.851 651.173 476.037Z"
                        fill="#00AA3B"
                      />
                    </svg>
                    <div class="m-2">
                      <a href="#" class="text-green-600 hover:underline ">
                        Comes with Authentication Certificate.
                      </a>
                    </div>
                  </div>
                </div>
                {/* special offers section */}
                <section>
                  <div class="my-2 text-lg font-bold">
                    Special offers For You
                  </div>
                  <div class="flex flex-row justify-evenly flex-wrap">
                    {/* <!-- free delivery --> */}
                    <div class="mt-2 flex flex-col items-center p-1 rounded-md border border-green-600 ">
                      <div class="flex flex-col items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-8 h-8 text-green-600"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h2 class="text-sm font-bold  ">
                          <p class="inline-block font-bold text-red-500">
                            Free !!
                          </p>
                          Delivery
                        </h2>
                      </div>
                    </div>
                    {/* <!-- return  --> */}
                    <div class="mt-2 flex flex-col items-center p-1 rounded-md border border-green-600 ">
                      <div class="flex flex-col items-center ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0,0,256,256"
                            class="h-8 w-8"
                          >
                            <g
                              fill="#03a81f"
                              fill-rule="nonzero"
                              stroke="none"
                              stroke-width="30"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              stroke-miterlimit="5"
                            >
                              <g transform="scale(5.33333,5.33333)">
                                <path d="M28.98438,4.98633c-0.04844,0.00105 -0.09675,0.00562 -0.14453,0.01367h-19.83984c-2.19733,0 -4,1.80267 -4,4v30c0,2.19733 1.80267,4 4,4h30c2.19733,0 4,-1.80267 4,-4v-30c0,-2.19733 -1.80267,-4 -4,-4h-9.8457c-0.05615,-0.00939 -0.113,-0.01396 -0.16992,-0.01367zM9,7h19v7h-8v-4c0.0051,-0.36064 -0.18438,-0.69608 -0.49587,-0.87789c-0.3115,-0.18181 -0.69676,-0.18181 -1.00825,0c-0.3115,0.18181 -0.50097,0.51725 -0.49587,0.87789v4c0,1.09306 0.90694,2 2,2h8c1.09306,0 2,-0.90694 2,-2v-7h9c1.11667,0 2,0.88333 2,2v30c0,1.11667 -0.88333,2 -2,2h-30c-1.11667,0 -2,-0.88333 -2,-2v-30c0,-1.11667 0.88333,-2 2,-2zM27.98438,29c-0.25977,0.00414 -0.50774,0.10921 -0.69141,0.29297l-2,2c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l0.29297,-0.29297v4.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-4.58594l0.29297,0.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-2,-2c-0.19132,-0.19141 -0.45205,-0.29711 -0.72266,-0.29297zM34.98438,29c-0.25977,0.00414 -0.50774,0.10921 -0.69141,0.29297l-2,2c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l0.29297,-0.29297v4.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-4.58594l0.29297,0.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-2,-2c-0.19132,-0.19141 -0.45205,-0.29711 -0.72266,-0.29297z"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h2 class="text-sm flex flex-col items-center  font-bold ">
                          Return/Exchange
                        </h2>
                      </div>
                    </div>
                    {/* <!-- cod --> */}
                    <div class="mt-2 flex flex-col items-center p-1 rounded-md border border-green-600 ">
                      <div class="flex flex-col items-center">
                        <span>
                          <g
                            fill="#03a81f"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="5"
                          >
                            <svg
                              viewBox="0 0 255 230"
                              class="h-8 w-8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M218.782 178.492C216.852 172.183 210.501 168.275 204.007 169.446C194.389 171.158 183.798 173.945 172.58 176.893C166.882 178.391 161.031 179.922 155.22 181.324C152.899 171.551 144.287 164.282 133.996 163.933L129.363 163.776C122.298 163.776 114.588 161.042 107.13 158.398C99.6581 155.75 91.9306 153.008 84.723 153.008C73.9663 153.008 61.001 154.73 46.3721 167.516C45.2565 168.491 43.8487 169.025 42.514 169.025C42.5056 169.025 42.4971 169.025 42.4915 169.025L39.6618 168.896V160.986C39.6618 159.432 38.403 158.176 36.8518 158.176H4.21649C2.66537 158.176 1.40649 159.432 1.40649 160.986V226.015C1.40649 227.568 2.66537 228.825 4.21649 228.825H36.8575C38.4086 228.825 39.6675 227.568 39.6675 226.015V216.905H50.8878C54.7459 216.905 58.6125 217.329 62.3779 218.169L97.1263 225.916C100.265 226.619 103.483 226.973 106.703 226.973C106.914 226.973 107.127 226.97 107.341 226.967L126.57 226.686C132.355 226.605 137.987 225.402 143.286 223.12L211.446 194.335C217.588 191.699 220.741 184.885 218.782 178.492ZM34.0475 223.207H7.02649V163.798H34.0475V223.207ZM209.243 189.167L141.083 217.953C136.444 219.948 131.532 220.996 126.485 221.066L107.254 221.347C104.275 221.395 101.265 221.083 98.3487 220.434L63.6002 212.687C59.433 211.757 55.1562 211.285 50.8878 211.285H39.6675V174.524L42.351 174.645C42.3763 174.645 42.3988 174.645 42.4241 174.645C45.22 174.645 47.9345 173.619 50.0757 171.751C63.3052 160.19 75.0144 158.631 84.7286 158.631C90.9696 158.631 97.9103 161.092 105.258 163.697C113.163 166.502 121.332 169.396 129.267 169.396H129.273L133.808 169.55C141.536 169.812 147.97 175.277 149.724 182.608C129.559 187.149 110.758 189.322 102.117 181.395C100.973 180.346 99.1917 180.425 98.1464 181.569C97.0954 182.712 97.1741 184.488 98.3178 185.539C112.475 198.516 143.755 190.288 174.014 182.33C185.116 179.408 195.603 176.651 204.991 174.979C208.681 174.327 212.308 176.539 213.41 180.138C214.528 183.783 212.727 187.669 209.243 189.167Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                              <path
                                d="M178.158 86.7987C176.604 86.7987 175.348 88.0576 175.348 89.6087V131.776H29.4447V55.0232H123.051C124.603 55.0232 125.861 53.7643 125.861 52.2132C125.861 50.6621 124.603 49.4032 123.051 49.4032H26.6347C25.0836 49.4032 23.8247 50.6621 23.8247 52.2132V134.588C23.8247 136.142 25.0836 137.398 26.6347 137.398H178.158C179.712 137.398 180.968 136.142 180.968 134.588V89.6087C180.968 88.0576 179.712 86.7987 178.158 86.7987Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                              <path
                                d="M104.651 69.2811C91.3517 69.2811 80.5332 80.0996 80.5332 93.3994C80.5332 106.699 91.3517 117.518 104.651 117.518C117.951 117.518 128.77 106.699 128.77 93.3994C128.77 80.0996 117.951 69.2811 104.651 69.2811ZM104.651 111.898C94.4511 111.898 86.1532 103.6 86.1532 93.3994C86.1532 83.1991 94.4511 74.9011 104.651 74.9011C114.852 74.9011 123.15 83.1991 123.15 93.3994C123.15 103.6 114.852 111.898 104.651 111.898Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                              <path
                                d="M150.615 117.394C152.169 117.394 153.425 116.135 153.425 114.584C153.425 113.033 152.169 111.774 150.615 111.774H131.869C130.318 111.774 129.059 113.033 129.059 114.584C129.059 116.135 130.318 117.394 131.869 117.394H150.615Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                              <path
                                d="M61.2428 74.9011H77.4368C78.9879 74.9011 80.2468 73.6422 80.2468 72.0911C80.2468 70.54 78.9879 69.2811 77.4368 69.2811H58.6941C57.143 69.2811 55.8841 70.54 55.8841 72.0911C55.8841 77.3205 51.6297 81.5749 46.4003 81.5749C44.8492 81.5749 43.5903 82.8338 43.5903 84.3849V102.29C43.5903 103.841 44.8492 105.1 46.4003 105.1C51.6297 105.1 55.8841 109.355 55.8841 114.584C55.8841 116.135 57.143 117.394 58.6941 117.394H77.4368C78.9879 117.394 80.2468 116.135 80.2468 114.584C80.2468 113.033 78.9879 111.774 77.4368 111.774H61.2428C60.0935 105.696 55.2884 100.891 49.2103 99.7415V86.9335C55.2912 85.7843 60.0935 80.9792 61.2428 74.9011Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                              <path
                                d="M251.497 0.885742H218.872C217.319 0.885742 216.062 2.14462 216.062 3.69574V6.25846C208.675 5.53067 202.206 4.60056 195.982 3.68731C181.806 1.6051 169.568 -0.196108 153.61 2.09404C143.368 3.56367 134.634 10.3948 130.751 19.9432L119.486 38.2897C118.673 39.6132 119.087 41.3413 120.41 42.1534C120.871 42.4372 121.377 42.5693 121.877 42.5693C122.821 42.5693 123.746 42.0944 124.274 41.2289L135.666 22.6801C135.75 22.5424 135.823 22.3963 135.882 22.2446C138.976 14.4412 146.074 8.85209 154.408 7.65503C169.563 5.48009 180.856 7.1408 195.164 9.24549C201.316 10.1503 208.256 11.1479 216.065 11.9009V60.469C203.319 61.8009 194.993 59.2017 187.847 51.6484C187.319 51.092 186.586 50.7717 185.816 50.7689H185.804C185.043 50.7689 184.309 51.0808 183.778 51.6315L167.815 68.2274C166.674 69.534 165.814 71.029 165.269 72.6672C165.23 72.7824 165.199 72.9004 165.176 73.0184L161.956 89.5216C160.118 94.7482 154.703 97.7352 149.274 96.4876L147.06 95.9761C141.547 94.706 137.905 89.3305 138.79 83.5531L140.178 67.6064C140.35 66.4936 140.78 65.4202 141.415 64.5098L163.086 33.7515C163.979 32.4814 163.676 30.7279 162.408 29.8344C161.135 28.938 159.385 29.2443 158.491 30.5116L136.815 61.2811C135.68 62.9053 134.921 64.7964 134.601 66.9376L133.212 82.8815C131.903 91.3677 137.43 99.5252 145.798 101.453L148.013 101.964C149.269 102.254 150.528 102.394 151.764 102.391C158.708 102.391 165.044 98.0022 167.343 91.1401C167.382 91.0221 167.413 90.9069 167.435 90.7861L170.653 74.2858C170.965 73.4175 171.428 72.6307 171.957 72.0209L185.855 57.5719C193.695 64.7655 203.041 67.3647 216.062 66.1115V68.7163C216.062 70.2675 217.319 71.5263 218.872 71.5263H251.497C253.05 71.5263 254.307 70.2675 254.307 68.7163V3.69574C254.307 2.14462 253.05 0.885742 251.497 0.885742ZM248.687 65.9148H221.682V6.50574H248.687V65.9148Z"
                                fill="#218A06"
                                stroke="#00AA3B"
                              />
                            </svg>
                          </g>
                        </span>
                      </div>
                      <div class="">
                        <a class="mb-2 text-sm" href="#">
                          <h2 class="text-sm font-bold">Cash On Delivery</h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              {/* product variation section */}
              {/* <ProductVariation></ProductVariation> */}
              {/* buy box */}
              <BuyBox productid={1212}></BuyBox>
              {/* delivery and services section */}
              <DeliveryServices></DeliveryServices>
              {/* crafter profile for larger screen */}
              {/* <LgCrafterProfile id={45825}></LgCrafterProfile> */}
              {/* crafter profile for smaller screen */}
              {/* <CrafterProfile id={45825}></CrafterProfile> */}
              {/* description section */}
              <section class="lg:col-span-3 ">
                <div class="">
                  <nav class="flex gap-4 border-b border-green-600">
                    <a
                      href="#"
                      title=""
                      class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                    >
                      {" "}
                      Description
                    </a>
                    <a
                      href="#"
                      title=""
                      class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                    >
                      Reviews
                      <span class="ml-2 block rounded-full bg-green-600 px-2 py-px text-xs font-bold text-gray-100">
                        {" "}
                        1,209
                      </span>
                    </a>
                  </nav>
                  {/* product description */}
                  <div class="mt-8 flow-root sm:mt-12 pb-8 border-b border-green-600 mb-4">
                    <h1 class="text-3xl font-bold">Product Description</h1>
                    {productsData.description}
                  </div>
                </div>
              </section>
              {/* Photo review section */}
              <section>
                <PhotoReview
                  id={52489}
                  image={productsData.image}
                ></PhotoReview>
              </section>
              {/* user rating section */}
              <section className="mt-4">
                <div>
                  <SectionHeader
                    title="Review with Photos"
                    inlineButton="True"
                  ></SectionHeader>
                </div>
                <ReviewCard rating={3} image={productsData.image}></ReviewCard>
                {/* <ReviewCard rating={3}></ReviewCard>
                <ReviewCard rating={3}></ReviewCard> */}
              </section>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* featured product grid section */}
        <section>
          <section class="bg-white pt-14 pb-4 text-gray-700 sm:py-9 ">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <GridHeader
                genericTitle="true"
                text="Selected products only for you."
              ></GridHeader>
            </div>
          </section>
          {/* <div class="mt-2 mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
          </div> */}
          {/* Product display grid */}
          {/* <ProductGrid
            genericTitle={true}
            text="Get the latest Products"
            api="http://192.168.29.58:8000/api/Products"
            headerVisible={true}
          ></ProductGrid> */}
        </section>
      </section>

      <Footer></Footer>
    </section>
  );
}

export default ProdView;
