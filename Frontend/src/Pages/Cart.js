import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartElement from "../components/CartElement/CartElement";
import Footer from "../components/Footer/Footer";
import ErrorAlert from "../components/Alerts/ErrorAlert";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Cart(props) {
  const [getdata, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function checkoutHandler() {
    navigate("/orderSummary", { replace: false });
  }
  function homeNavigateHandler() {
    navigate("/", { replace: false });
  }

  useEffect(() => {
    setError(false);
    fetch("http://localhost:8000/api/categoriesd")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);

        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      {error && <ErrorAlert />}
      <section class="flex flex-row items-center justify-center">
        <div class="flex flex-col self-center  md:w-4/6 m-3 text-black sm:p-10">
          <h2 class="mt-1 text-4xl font-bold tracking-tight">Your cart</h2>
          <ul class="flex flex-col divide-y divide-green-600">
            {loading &&
              Array.from({ length: 3 }, (_, i) => (
                <div className={` flex rounded-md p-2`}>
                  <div
                    className={`aspect-square overflow-hidden h-28 w-28 ${
                      i == 9 ? "xs:hidden s:block " : " "
                    }`}
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
                    <div className="w-20 h-4 pl-4 pt-2.5 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  </div>
                </div>
              ))}

            {/* ---- */}
            {getdata.map((item) => {
              <CartElement
                imgSrc="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
                title=" Set of travel chargers"
                varient="black"
                price="300"
                sellingPrice="200"
                quantity="1"
              />;
            })}
          </ul>

          <hr class="h-px my-8 bg-green-600 border-0 dark:bg-gray-700"></hr>
          <div class="py-2 mt-1 border-b">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900">Subtotal</p>
              {/* <p class="text-lg font-semibold text-gray-900">Rs. 399.00</p> */}
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
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900">Shipping</p>
              {/* <p class="text-lg font-bold text-gray-900">Rs. 8.00</p> */}
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
          </div>
          <div class="flex items-center justify-between mt-6">
            <p class="font-medium text-gray-900 text -xl">Total</p>
            <p class="text-2xl font-semibold text-gray-900">
              {/* <span class="text-xs font-normal text-gray-400">Rs.</span> 408.00 */}
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
            </p>
          </div>
          <hr class="h-px my-8 bg-green-600 border-0 dark:bg-gray-700"></hr>
          {/* <!-- cart back and checkout button --> */}
          <div class="flex justify-center space-x-4">
            <button
              type="button"
              class="px-6 py-2 font-semibold text-white bg-green-600 border rounded-md w-44"
              onClick={homeNavigateHandler}
            >
              Back
            </button>
            <button
              type="button"
              class={`inline-flex px-6 py-2 font-semibold text-white bg-green-600 border rounded-md w-44 ${
                error == true ? "hidden" : ""
              }`}
              onClick={checkoutHandler}
            >
              <a>Checkout</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 ml-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
export default Cart;
