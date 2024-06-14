import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import { useNavigate } from "react-router-dom";

function Profile(props) {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/orders", { replace: false });
  }
  function handleLogin() {
    navigate("/signin", { replace: false });
  }
  function handelLogout() {
    navigate("/signup", { replace: false });
  }
  function handelAdressbook() {
    navigate("/address", { replace: false });
  }

  return (
    <>
      <Nav></Nav>
      <div class="bg-gray-100">
        <div class="container mx-auto my-5 p-5">
          <div class=" no-wrap align-center m-auto">
            <div class="w-full md:w-4/5   m-auto ">
              {/* <!-- Profile tab --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide text-gray-900 font-bold text-xl leading-8 my-1">
                    Anurag Biswas
                  </span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">Jane</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">Doe</div>
                    </div>
                    {/* <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">Female</div>
                    </div> */}
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">+11 998001001</div>
                    </div>
                    {/* <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div class="px-4 py-2">
                        Arlington Heights, IL, Illinois
                      </div>
                    </div> */}
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">
                          jane@example.com
                        </a>
                      </div>
                    </div>
                    {/* <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-4 py-2">Feb 06, 1998</div>
                    </div> */}
                  </div>
                </div>
                <button
                  class="block w-full text-green-600 text-sm font-semibold rounded-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                  onClick={clickHandler}
                >
                  Order History
                </button>
                <div className="flex">
                  <button
                    class="block w-full text-green-600 text-sm font-semibold rounded-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <button
                    class="block w-full text-green-600 text-sm font-semibold rounded-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    onClick={handelLogout}
                  >
                    Log Out
                  </button>
                  <button
                    class="block w-full text-green-600 text-sm font-semibold rounded-lg border border-green-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                    onClick={handelAdressbook}
                  >
                    View Adress Book
                  </button>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div class=""></div>

              {/* <!-- Experience and education --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="grid grid-cols-2">
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Links</span>
                    </div>
                    <ul class="list-inside space-y-2">
                      <li>
                        <div class="text-teal-600">FAQ</div>
                        <div class="text-gray-500 text-xs">
                          Find all the answers to you questions.
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">Raise a support request</div>
                        <div class="text-gray-500 text-xs">
                          Let us sovle your problem.
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">Join as a Seller.</div>
                        <div class="text-gray-500 text-xs">
                          Sell your creations wroldwide, click to learn more.
                        </div>
                      </li>
                      <li>
                        <div class="text-teal-600">
                          Brand your created products.
                        </div>
                        <div class="text-gray-500 text-xs">
                          we provide branding to you creations without any
                          hassle.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Profile;
