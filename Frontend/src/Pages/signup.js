import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginModal from "../components/Modal/loginModal";

function Signup() {
  const [passCorrect, setPassState] = useState(true);
  const [login, setLoin] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();

  async function handelSignup(event) {
    event.preventDefault();
    setLoginError(false);
    if (!(event.target.password1.value === event.target.password2.value)) {
      console.log("password not match");
      setPassState(false);
    }

    var jsonData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      password: event.target.password1.value,
    };

    console.log(jsonData);

    try {
      setProgress(true);
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
      });

      const result = await response.json();
      console.log("Success:", result);
      navigate("/");
      setLoin(true);
    } catch (error) {
      console.log("error: ", error);
      setLoginError(true);
      setProgress(false);
    }
  }

  return (
    <>
      {progress && (
        <div className="z-10 w-100 h-100 bg-green-600 p-2 text-white font-bold">
          Loging You In !
        </div>
      )}
      {loginError && (
        <div className="z-10 w-100 h-100 bg-green-600 p-2 text-white font-bold bg-blend-normal">
          There was an Error, Please Check Your Password !
        </div>
      )}
      <div className={`bg-gray-100 flex items-center justify-center h-screen `}>
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
            Create a new account
          </h2>
          <p class="text-gray-600 text-center mb-6">
            Enter your details to register.
          </p>
          <form onSubmit={handelSignup}>
            <div class="mb-4">
              <label
                for="fullName"
                class="block  text-gray-700 text-sm font-semibold mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                class="form-input w-full px-4 py-2 border  border-green-600 rounded-lg c text-gray-700 focus:ring-green-600"
                required
                name="name"
                placeholder="Your name"
              />
            </div>
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
                name="email"
                class="form-input w-full px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                required
                placeholder="Your email"
              />
            </div>
            <div class="mb-4">
              <label
                for="phoneNumber"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Phone Number *
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phone"
                class="form-input w-full px-4 py-2 border  border-green-600 rounded-lg text-gray-700 focus:ring-green-600"
                required
                placeholder="Your phone Number"
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
                id="password1"
                name="password1"
                className={`form-input w-full px-4 py-2 border  rounded-lg text-gray-700 focus:ring-green-600
                  ${passCorrect && "border-green-600"} 
                  ${!passCorrect && "border-rose-700"}
                  `}
                required
                placeholder="Password"
              />
              <label
                for="password1"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password *
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className={`form-input w-full px-4 py-2 border  rounded-lg text-gray-700 focus:ring-green-600
                  ${passCorrect && "border-green-600"} 
                  ${!passCorrect && "border-rose-700"}
                
                  `}
                required
                placeholder="Repeat password"
              />
              <p class="text-gray-600 text-xs mt-1">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </p>
              {!passCorrect && (
                <p className="text-rose-700">Password Do not Match</p>
              )}
            </div>
            {/* <!-- remove the a tag with app.ate actn --> */}

            <button
              type="submit"
              class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Register
            </button>

            <p class="text-gray-600 text-xs text-center mt-4">
              By clicking Register, you agree to accept skillacart's
              <a href="#" class="text-green-600 hover:underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
