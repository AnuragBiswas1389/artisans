import { useState } from "react";
function Signin() {
  const [getMail, setMail] = useState("");
  const [getPassword, setPassword] = useState("");

  function handelSignin() {
    if (getMail && getPassword) {
      console.log(getMail, getPassword);
    } else {
      alert("Fill all the fields");
    }
  }
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div class="flex justify-center mb-6">
            <span class="inline-block bg-gray-200 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </span>
          </div>
          <h2 class="text-2xl font-semibold text-center mb-4">
            Login to your account
          </h2>
          <p class="text-gray-600 text-center mb-6">
            Enter your details to Continue.
          </p>

          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              class="form-input w-full px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
              required
              placeholder="Enter your email"
              onChange={(e) => setMail(e.target.value)}
              value={getMail}
            />
          </div>
          <div class="mb-6">
            <label
              for="password1"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              class="form-input w-full px-4 py-2 border border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
              required
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={getPassword}
            />
          </div>
          <button
            onClick={handelSignin}
            class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
            
      </div>
      
    </>
  );
}

export default Signin;
