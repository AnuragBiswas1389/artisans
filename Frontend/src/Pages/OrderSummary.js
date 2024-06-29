import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorAlert from "../components/Alerts/ErrorAlert";

function OrderSummary() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [getData, setData] = useState([]);

  const navigate = useNavigate();

  function homeNavigateHandler() {
    navigate("/", { replace: false });
  }

  useEffect(() => {
    setError(false);
    fetch("http://192.168.29.57:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  return (
    <section>
      <Nav></Nav>
      {error && <ErrorAlert />}
      <section class="flex items-center py-2">
        <div class="justify-center flex-1 max-w-6xl px-2 py-4 md:mx-auto bg-white mx-2 rounded-md md:py-10 md:px-10">
          <div>
            <div>
              <h1 class="px-0 mb-2 text-3xl font-bold tracking-wide text-green-600">
                Thank you !
              </h1>
              <p class="px-2 mb-8 text-2xl font-bold tracking-wide text-black">
                Your order has been received.
              </p>
            </div>

            <div class="flex border-b border-gray-200   items-stretch justify-start w-full h-full px-4 mb-8 md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div class="flex items-start justify-start flex-shrink-0">
                <div class="flex items-center justify-center w-full pb-6 space-x-4 md:justify-start">
                  {!loading && (
                    <img
                      src="/assets/icons/profileIcon.png"
                      class="object-cover w-16 h-16 rounded-md"
                      alt="avatar"
                    ></img>
                  )}

                  <div class="flex flex-col items-start justify-start space-y-2">
                    {!loading && (
                      <p class="text-lg font-semibold leading-4 text-left text-gray-800">
                        Rahul Sharma
                      </p>
                    )}

                    {!loading && (
                      <p class="text-sm leading-4 cursor-pointer">
                        rahul@gmail.com
                      </p>
                    )}

                    {loading && (
                      <div className={` flex rounded-md `}>
                        <div
                          className={`rounded-full overflow-hidden h-28 w-28 `}
                        >
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="flex flex-col">
                          <div className="w-52 h-4 pl-4 ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                          <div className="w-52 h-4 pl-4 pt-4">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                          <div className="w-52 h-4 pl-4 ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                          <div className="w-36 h-4 pl-4 pt-2 ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                          <div className="w-20 h-4 pl-4 pt-2 ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center pb-4 mb-10 border-b border-green-600">
              <div class="flex flex-row justify-evenly w-full">
                <div class="w-full px-4 mb-4 md:w-1/4">
                  <p class="mb-2 text-sm leading-5 text-gray-600">
                    Order Number:
                  </p>
                  {!loading && (
                    <p class="text-base font-semibold leading-4 text-gray-800">
                      029837614267
                    </p>
                  )}
                  {loading && (
                    <div className="w-36 h-5 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  )}
                </div>

                <div class="w-full px-4 mb-4 md:w-1/4">
                  <p class="mb-2 text-sm leading-5 text-gray-600">Date:</p>
                  {!loading && (
                    <p class="text-base font-semibold leading-4 text-gray-800">
                      March 18, 2022
                    </p>
                  )}

                  {loading && (
                    <div className="w-36 h-5 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  )}
                </div>
              </div>

              <div class="flex flex-row justify-evenly w-full">
                <div class="w-full px-4 mb-4 md:w-1/4">
                  <p class="mb-2 text-sm font-medium leading-5 text-gray-800">
                    Total:
                  </p>

                  {!loading && (
                    <p class="text-base font-semibold leading-4 text-green-600">
                      Rs.700
                    </p>
                  )}

                  {loading && (
                    <div className="w-36 h-5 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  )}
                </div>

                <div class="w-full px-4 mb-4 md:w-1/4">
                  <p class="mb-2 text-sm leading-5 text-gray-600">
                    Payment Method:
                  </p>

                  {!loading && (
                    <p class="text-base font-semibold leading-4 text-gray-800">
                      Cash on delivery
                    </p>
                  )}

                  {loading && (
                    <div className="w-36 h-5 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div class="px-4 mb-2 border-b border-green-600 pb-4">
              <div class=" flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-8">
                <div class="flex flex-col w-full space-y-6">
                  <h2 class="mb-2 text-xl font-semibold text-gray-700">
                    Order details
                  </h2>
                  {!loading && (
                    <div class="flex flex-col items-center justify-center w-full pb-4 space-y-4 border-b border-gray-200">
                      <div class="flex justify-between w-full">
                        <p class="text-base leading-4 text-gray-800">
                          Subtotal
                        </p>

                        <p class="text-base leading-4 text-gray-600">Rs.1000</p>
                      </div>

                      <div class="flex items-center justify-between w-full">
                        <p class="text-base leading-4 text-gray-800">
                          Discount
                        </p>

                        <p class="text-base leading-4 text-gray-600">10%</p>
                      </div>

                      <div class="flex items-center justify-between w-full">
                        <p class="text-base leading-4 text-gray-800">
                          Shipping
                        </p>

                        <p class="text-base leading-4 text-gray-600">Rs.100</p>
                      </div>
                    </div>
                  )}
                  {loading && (
                    <div className="flex flex-col">
                      <div className="w-68 h-4 pl-4 ">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                      <div className="w-68 h-4 pl-4 pt-4">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                      <div className="w-[85%] h-4 pl-4 ">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                      <div className="w-[75%] h-3 pl-4 mt-4">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                      <div className="w-[45%] h-3 pl-4 mt-4">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    </div>
                  )}

                  <div class="flex items-center justify-between w-full">
                    <p class="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>

                    {!loading && (
                      <p class="text-base font-semibold leading-4 text-gray-600">
                        Rs.700
                      </p>
                    )}
                    {loading && (
                      <div className="w-[15%] h-5 ">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    )}
                  </div>
                </div>

                <div class="flex flex-col justify-between w-full pt-4 space-y-4 md:px-8 ">
                  <h2 class="mb-2 text-xl font-semibold text-gray-700">
                    Shipping
                  </h2>

                  <div class="flex items-start justify-between w-full">
                    <div class="flex items-center  justify-center space-x-2">
                      <div class="w-8 h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-6 h-6 text-green-600 bi bi-truck"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                        </svg>
                      </div>

                      <div class="flex flex-col items-center justify-start">
                        <p class="text-lg font-semibold leading-6 text-gray-800">
                          Delivery
                          <br></br>
                          {!loading && (
                            <span class="text-sm font-normal">
                              Delivery with 24 Hours
                            </span>
                          )}
                          {loading && (
                            <div className="w-28 h-3">
                              <Skeleton
                                width={"100%"}
                                height={"100%"}
                                baseColor="rgb(229 231 235)"
                                highlightColor="rgb(209 213 219)"
                              ></Skeleton>
                            </div>
                          )}
                        </p>
                      </div>
                    </div>

                    {!loading && (
                      <p class="text-lg font-semibold leading-6 text-gray-800">
                        Rs.50
                      </p>
                    )}
                  </div>
                  <div>
                    <p class="mb-2 text-xl font-semibold text-gray-700">
                      Shipping to
                    </p>
                    {!loading && (
                      <p class=" text-gray-700">
                        Ramnagar, Agartala, Tripura, 799002{" "}
                      </p>
                    )}
                    {loading && (
                      <div>
                        <div className="w-[85%] h-4 pl-4 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-[75%] h-3 pl-4 mt-4">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-[45%] h-3 pl-4 mt-4">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex-col  inline-flex items-center  justify-center text-sm font-medium text-gray-400 ${
                loading == false ? " block" : " hidden"
              }`}
            >
              <div class="text-center text-gray-400">
                we have sent an email to abc@gmail.com with the
                <a href="#" className="text-green-600">
                  {" "}
                  order details
                </a>
                <br></br>
              </div>
              <div class="text-center text-gray-400">
                You can cancel this order within 48 hours.
                <a href="#" className="text-green-600">
                  {" "}
                  Know More
                </a>
                <br></br>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-end gap-4 px-4 mt-6">
              <button
                class={`w-full px-4 py-2 bg-green-600 text-white rounded-md md:w-auto`}
                onClick={homeNavigateHandler}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default OrderSummary;
