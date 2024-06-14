import { useState } from "react";

function Address() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSateSelected, setSelectState] = useState(false);
  const [isDefaultAddress, setDefaultAddress] = useState(false);
  //values
  const [getState, setState] = useState("");
  const [getCity, setCity] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getPincode, setPincode] = useState("");
  const [getName, setName] = useState("");
  const [getPrimPhone, setPrimPhone] = useState("");
  const [getSecPhone, setSecPhone] = useState("");
  const [getStreet, setStreet] = useState("");
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  function toggleDropdown(event) {
    setIsOpen(!isOpen);
  }
  function submitFormHandler() {
    if (
      getAddress &&
      getCity &&
      getName &&
      getPincode &&
      getPrimPhone &&
      getState
    ) {
      console.log(
        getAddress,
        getCity,
        getName,
        getPincode,
        getPrimPhone,
        getSecPhone,
        getState,
        getStreet,
        isDefaultAddress
      );
    } else {
      alert("complete the address !");
    }
  }

  return (
    <>
      <div>
        <div class="flex h-screen bg-gray-100">
          <div class="m-auto">
            <div>
              <div class="mt-5 bg-white rounded-lg shadow mx-2 border border-green-600">
                <div class="flex">
                  <div class="flex-1 py-5 pl-5 overflow-hidden">
                    <svg
                      class="inline align-text-top"
                      height="28px"
                      viewBox="0 0 24 24"
                      width="28px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                    >
                      <g>
                        <path
                          d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                          fill="none"
                          id="svg_1"
                          stroke="null"
                        ></path>
                        <path
                          d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                          id="svg_2"
                        ></path>
                        <circle
                          cx="7.04807"
                          cy="6.97256"
                          r="2.5"
                          id="svg_3"
                        ></circle>
                      </g>
                    </svg>
                    <h1 class="inline text-green-600 text-center text-2xl font-semibold leading-none">
                      Add New Addres
                    </h1>
                  </div>
                </div>
                <div class="px-5 pb-5">
                  {/* <!-- input for name --> */}
                  <input
                    type="Name"
                    id="Name"
                    class="w-full mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                    required
                    placeholder="Full Name*"
                    onChange={(e) => setName(e.target.value)}
                    value={getName}
                  />
                  {/* <!-- input for address --> */}
                  <input
                    type="address"
                    id="address"
                    class="w-full mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 "
                    required
                    placeholder="Address*"
                    onChange={(e) => setAddress(e.target.value)}
                    value={getAddress}
                  />
                  <div class="flex ">
                    <div class="flex-grow w-3/4 md:w-1/2 pr-2 mt-2">
                      {/* <!-- city selector drop down --> */}
                      <div
                        onClick={() => toggleDropdown()}
                        id="dropdown-button"
                        class=" flex items-center justify-center bg-green-600 rounded-md "
                      >
                        <div class="relative group">
                          <button
                            onClick={() => toggleDropdown()}
                            class="inline-flex justify-center h-10 w-full px-4 py-2 text-sm font-medium text-white border bg-green-600 border-green-600 rounded-md shadow-sm "
                          >
                            <span class="mr-2">
                              {getState ? getState : "select your state"}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 ml-2 "
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                          <div
                            id="dropdown-menu"
                            class={`z-10 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 w-40 ring-black ring-opacity-5 p-1 space-y-1 h-52 overflow-y-auto ${
                              isOpen ? " block" : " hidden"
                            }`}
                          >
                            {isOpen &&
                              states.map((item) => (
                                <button
                                  className="block w-full text-center text-gray-700 cursor-pointer trounded-md"
                                  key={item}
                                  onClick={() => setState(item)}
                                >
                                  {item}
                                </button>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow ">
                      <input
                        type="text"
                        id="city"
                        class="w-full mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                        required
                        placeholder="City/Town*"
                        onChange={(e) => setCity(e.target.value)}
                        value={getCity}
                      />
                    </div>
                  </div>
                  <div class="flex">
                    {/* <!-- input for Phone 1 --> */}
                    <input
                      type="phone 1"
                      id="Phone1"
                      class=" w-1/2 mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                      required
                      placeholder="Primary Phone*"
                      onChange={(e) => setPrimPhone(e.target.value)}
                      value={getPrimPhone}
                    />
                    {/* <!-- input for Phone 2 --> */}
                    <input
                      type="Phone 2"
                      id="Phone2"
                      class=" w-1/2 ml-1 mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                      placeholder="Secoundary phone"
                      onChange={(e) => setSecPhone(e.target.value)}
                      value={getSecPhone}
                    />
                  </div>
                  {/* <!-- input for pincode --> */}
                  <div class="flex ">
                    <div class="flex-grow w-2/4 pr-2 mt-2">
                      {/* <!-- city selector drop down --> */}
                      <div class=" flex items-center justify-center">
                        <input
                          type="number"
                          id="pincode"
                          class="w-full px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                          required
                          placeholder="pincode*"
                          onChange={(e) => setPincode(e.target.value)}
                          value={getPincode}
                        />
                      </div>
                    </div>
                    <div class="flex-grow">
                      <input
                        type="text"
                        id="Street"
                        class="w-full mt-2 px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                        placeholder="Street"
                        onChange={(e) => setStreet(e.target.value)}
                        value={getStreet}
                      />
                    </div>
                  </div>

                  <div class="flex items-center pt-3">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                      onClick={() => setDefaultAddress(true)}
                    />
                    <label
                      for="safeAdress"
                      class="block ml-2 text-sm text-gray-900"
                    >
                      Save as default address
                    </label>
                  </div>
                </div>

                <hr class="mt-4 border-1 mx-2 border-green-600" />
                <div class="flex flex-row-reverse p-3">
                  <div class="flex-initial pl-3">
                    <button
                      onClick={submitFormHandler}
                      class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-green-600 rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                          opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                      </svg>
                      <span class="pl-2 mx-1">Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
