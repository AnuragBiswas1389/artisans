import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import ErrorAlert from "../components/Alerts/ErrorAlert";

function OrderDetails(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setError(false);
    fetch("http://192.168.29.57:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div class="">
      <Nav></Nav>
      {error && <ErrorAlert></ErrorAlert>}
      <main class=" px-4 pt-2 sm:px-6 ">
        <div class="mx-auto max-w-5xl">
          <div class="max-w-xl">
            <h1 class="text-base font-medium text-green-600">Thank you!</h1>
            <p class="mt-2 text-4xl font-bold tracking-tight">
              It's on the way!
            </p>
            {!loading && (
              <p class="mt-2 text-base text-gray-500">
                Your order <p className="inline text-green-600">#14034056 </p>
                has shipped and will be with you soon.
              </p>
            )}
            {loading && (
              <div className=" w-36 h-4 ">
                <Skeleton
                  width={"100%"}
                  height={"100%"}
                  baseColor="rgb(229 231 235)"
                  highlightColor="rgb(209 213 219)"
                ></Skeleton>
              </div>
            )}

            <div className="flex flex-row  align-middle justify-between">
              <dl class="mt-12 text-sm font-medium">
                <dt class="text-gray-900">Tracking number</dt>
                {!loading && (
                  <a
                    href="#"
                    class="font-medium text-green-600 hover:text-green-700"
                  >
                    4582FED474DEDGHE
                  </a>
                )}
                {loading && (
                  <div className="w-26 h-4 ">
                    <Skeleton
                      width={"100%"}
                      height={"100%"}
                      baseColor="rgb(229 231 235)"
                      highlightColor="rgb(209 213 219)"
                    ></Skeleton>
                  </div>
                )}
              </dl>
              <div class="mt-14">
                <a
                  href="#"
                  class="font-medium text-green-600 hover:text-green-700"
                >
                  View invoice
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="order-heading"
            class="mt-10 border-t border-gray-200"
          >
            <h2 id="order-heading" class="sr-only">
              Your order
            </h2>

            <h3 class="sr-only">Items</h3>
            <div class="flex flex-col space-x-6 border-b border-gray-200 py-4">
              <div className="flex flex-row  px-4">
                {!loading && (
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
                    alt="heading"
                    class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
                  ></img>
                )}
                {!loading && (
                  <div class="px-4">
                    <h4 class="font-medium text-gray-900">
                      <a href="#">Cold Brew Bottle</a>
                    </h4>
                    <p class="text-sm text-gray-600">
                      This glass bottle comes with a mesh insert for steeping
                      tea or cold-brewing coffee.
                    </p>
                  </div>
                )}
                {loading && (
                  <div className={` flex rounded-md `}>
                    <div className={`rounded-md overflow-hidden h-28 w-28 `}>
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

              <div class="flex flex-auto flex-col">
                <div class="mt-6 flex flex-1 items-end">
                  <dl class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div class="flex">
                      <dt class="font-medium text-gray-900">Status</dt>

                      {!loading && (
                        <a class="ml-2 text-green-600" href="#">
                          Shipped
                        </a>
                      )}
                      {loading && (
                        <div className="w-16 h-4 ml-2 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                      )}
                    </div>
                  </dl>
                </div>
                <div class="mt-2 flex flex-1 items-end ">
                  <dl class="flex justify-evenly md:justify-start space-x-2 divide-x divide-gray-200 text-sm sm:space-x-6 w-full">
                    <div class="flex">
                      <dt class="font-medium text-gray-900">Quantity</dt>
                      {!loading && <dd class="ml-2 text-gray-700">1</dd>}
                      {loading && (
                        <div className="w-10 h-4 ml-2 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                      )}
                    </div>
                    <div class="flex pl-2 sm:pl-2">
                      <dt class="font-medium text-gray-900">Price</dt>

                      {!loading && <dd class="ml-2 text-gray-700">$32.00</dd>}
                      {loading && (
                        <div className="w-12 h-4 ml-2 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                      )}
                    </div>
                    <div class="flex pl-2 sm:pl-2">
                      <a href="#" class="font-medium text-green-600">
                        Tract progress
                      </a>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>

          {/* info section */}
          <section aria-labelledby="summary-heading" class="mt-6">
            <h2 id="summary-heading" class="pb-2 font-bold text-lg">
              Billing Summary
            </h2>
            <div class="rounded-lg bg-gray-50 shadow-md px-6 py-6">
              <div class="m-auto">
                <h4 class="text-md">Addresses information</h4>
                <dl class="flex flex-row justify-between py-10 text-sm border-t border-green-800">
                  <div>
                    <dt class="font-medium text-gray-900">Shipping address</dt>
                    {!loading && (
                      <dd class="mt-2 text-gray-700">
                        <address class="not-italic">
                          <span class="block">Kristin Watson</span>
                          <span class="block">7363 Cynthia Pass</span>
                          <span class="block">Toronto, ON N3Y 4H8</span>
                        </address>
                      </dd>
                    )}
                    {loading && (
                      <div className="flex flex-col">
                        <div className="w-40 h-4 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-40 h-4 pt-4">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-38 h-4 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-36 h-4 pt-2 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-20 h-4 pt-2 ">
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
                  <div>
                    <dt class="font-medium text-gray-900">Billing address</dt>

                    {!loading && (
                      <dd class="mt-2 text-gray-700">
                        <address class="not-italic">
                          <span class="block">Kristin Watson</span>
                          <span class="block">7363 Cynthia Pass</span>
                          <span class="block">Toronto, ON N3Y 4H8</span>
                        </address>
                      </dd>
                    )}
                    {loading && (
                      <div className="flex flex-col">
                        <div className="w-40 h-4 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-40 h-4 pt-4">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-38 h-4 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-36 h-4 pt-2 ">
                          <Skeleton
                            width={"100%"}
                            height={"100%"}
                            baseColor="rgb(229 231 235)"
                            highlightColor="rgb(209 213 219)"
                          ></Skeleton>
                        </div>
                        <div className="w-20 h-4 pt-2 ">
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
                </dl>

                <h4 class="text-md">Payment information</h4>
                <dl class="flex flex-row justify-between py-10 text-sm border-t border-green-800">
                  <div>
                    <dt class="font-medium text-gray-900">
                      Payment information
                    </dt>
                    <dd class="mt-2 flex">
                      <div>
                        <svg
                          aria-hidden="true"
                          width="36"
                          height="24"
                          viewBox="0 0 36 24"
                          class="h-6 w-auto"
                        >
                          <rect width="36" height="24" rx="4" fill="#224DBA" />
                          <path
                            d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                            fill="#fff"
                          />
                        </svg>
                        <p class="sr-only">Visa</p>
                      </div>
                      <div class="ml-4">
                        {!loading && (
                          <p class="text-gray-900">Ending with 4242</p>
                        )}
                        {!loading && (
                          <p class="text-gray-600">Expires 02 / 24</p>
                        )}
                        {loading && (
                          <div className="flex flex-col">
                            <div className="w-20 h-4  ">
                              <Skeleton
                                width={"100%"}
                                height={"100%"}
                                baseColor="rgb(229 231 235)"
                                highlightColor="rgb(209 213 219)"
                              ></Skeleton>
                            </div>
                            <div className="w-16 h-4 pt-2 ">
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
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Shipping method</dt>
                    <dd class="mt-2 text-gray-700">
                      {!loading && <p>DHL</p>}
                      {!loading && <p>Takes up to 3 working days</p>}
                      {loading && (
                        <div className="flex flex-col">
                          <div className="w-20 h-4  ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                          <div className="w-16 h-4 pt-2 ">
                            <Skeleton
                              width={"100%"}
                              height={"100%"}
                              baseColor="rgb(229 231 235)"
                              highlightColor="rgb(209 213 219)"
                            ></Skeleton>
                          </div>
                        </div>
                      )}
                    </dd>
                  </div>
                </dl>

                <h3 class="sr-only">Summary</h3>
                <dl class="space-y-6 border-t border-green-600 pt-10 text-sm">
                  <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Subtotal</dt>
                    {!loading && <dd class="text-gray-700">$36.00</dd>}
                    {loading && (
                      <div className="w-16 h-4 ">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    )}
                  </div>
                  <div class="flex justify-between">
                    <dt class="flex font-medium text-gray-900">
                      Discount
                      {!loading && (
                        <span class="ml-2 rounded-full bg-green-600 px-2 py-0.5 text-xs text-white">
                          STUDENT50
                        </span>
                      )}
                    </dt>
                    {!loading && <dd class="text-gray-700">-$18.00 (50%)</dd>}
                    {loading && (
                      <div className="w-16 h-4 ">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    )}
                  </div>
                  <div class="flex justify-between">
                    <dt class="font-medium text-gray-900">Shipping</dt>

                    {!loading && <dd class="text-gray-700">$5.00</dd>}
                    {loading && (
                      <div className="w-12 h-4">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    )}
                  </div>
                  <div class="flex justify-between border-t border-green-600">
                    <dt class="font-medium text-gray-900 mt-4">Total</dt>
                    {!loading && <dd class="text-gray-900 mt-4">$23.00</dd>}
                    {loading && (
                      <div className="w-12 h-4 mt-4">
                        <Skeleton
                          width={"100%"}
                          height={"100%"}
                          baseColor="rgb(229 231 235)"
                          highlightColor="rgb(209 213 219)"
                        ></Skeleton>
                      </div>
                    )}
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default OrderDetails;
