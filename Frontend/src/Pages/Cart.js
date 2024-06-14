import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import CartElement from "../components/CartElement/CartElement";
import Footer from "../components/Footer/Footer";

function Cart() {
  const navigate = useNavigate();
  function checkoutHandler() {
    navigate("/orderSummary", { replace: false });
  }
  function homeNavigateHandler() {
    navigate("/", { replace: false });
  }
  return (
    <>
      <Nav></Nav>
      <section class="flex flex-row items-center justify-center min-h-screen">
        <div class="flex flex-col self-center  md:w-4/6 m-3 text-black sm:p-10">
          <h2 class="mt-1 text-4xl font-bold tracking-tight">Your cart</h2>
          <ul class="flex flex-col divide-y divide-green-600">
            {/* ---- */}
            <CartElement
              imgSrc="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
              title=" Set of travel chargers"
              varient="black"
              price="300"
              sellingPrice="200"
              quantity="1"
            />
            {/* ---- */}
            <CartElement
              imgSrc="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
              title=" Set of travel chargers"
              varient="fast charger"
              price="300"
              sellingPrice="200"
              quantity="1"
            />
            {/* ---- */}
            <CartElement
              imgSrc="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
              title=" Set of travel chargers"
              varient="type c"
              price="300"
              sellingPrice="200"
              quantity="1"
            />
            {/* ---- */}
            <CartElement
              imgSrc="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
              title=" Set of travel chargers"
              varient="black"
              price="300"
              sellingPrice="200"
              quantity="3"
              onQuantityReduceClick=""
            />
          </ul>

          <hr class="h-px my-8 bg-green-600 border-0 dark:bg-gray-700"></hr>
          <div class="py-2 mt-1 border-b">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">Rs. 399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900">Shipping</p>
              <p class="text-lg font-bold text-gray-900">Rs. 8.00</p>
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <p class="font-medium text-gray-900 text -xl">Total</p>
            <p class="text-2xl font-semibold text-gray-900">
              <span class="text-xs font-normal text-gray-400">Rs.</span> 408.00
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
              class="inline-flex px-6 py-2 font-semibold text-white bg-green-600 border rounded-md w-44"
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
