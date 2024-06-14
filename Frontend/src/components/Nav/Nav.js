import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/profile", { replace: false });
  }

  function handelCartClick() {
    navigate("/cart", { replace: false });
  }

  return (
    <nav>
      {/* // Large screen search component  and header */}
      <nav className=" z-50 bg-green-600 h-16 sm:fixed  top-0 w-full flex justify-between items-center mx-auto  -2 pt-2 sm:pb-2 ">
        {/*<!-- logo --> */}
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <div className="hidden md:block pl-2">
              {/* <!-- this block appers in large sc; place logo here--> */}
              <img src="/assets/images/logo.png" className="h-9"></img>
            </div>
            <div className="block md:hidden  pl-2 ">
              {/* <!-- enter logo here for small screen --> */}
              <img src="/assets/images/logo.png" className="h-9"></img>
            </div>
          </a>
        </div>

        {/* <!-- end logo --> */}

        {/* <!-- search bar --> */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start  -2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <div className="flex items-center flex-grow-0 flex-shrink relative w-60 border rounded-full  -1  py-1">
                <div className="block flex-grow flex-shrink overflow-hidden bg-white"></div>
                {/* <!--this is the search bar for medium scree... implement search action on enter pressing here  --> */}
                <input
                  type="text"
                  className="w-full mx-1  btext-center flex placeholder-white bg-transparent text-white outline-none"
                  placeholder="Search any Product or category"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end search bar --> */}

        {/* <!-- login --> */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center" onClick={handelCartClick}>
              <div className="block relative">
                <button
                  type="button"
                  className="inline-block py-2  -3 rounded-full relative "
                >
                  <div className="flex items-center h-5  ">
                    <div className="_xpkakx hover:bg-green-800 rounded-full p-2">
                      <svg
                        viewBox="0 0 35 35"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                        style={{
                          display: "block",
                          height: 25,
                          width: 25,
                          fill: "currentcolor",
                        }}
                        id="Cart"
                      >
                        <path
                          d="M27.47,23.93H14.92A5.09,5.09,0,0,1,10,20L8,11.87a5.11,5.11,0,0,1,5-6.32h16.5a5.11,5.11,0,0,1,5,6.32l-2,8.15A5.1,5.1,0,0,1,27.47,23.93ZM12.94,8.05a2.62,2.62,0,0,0-2.54,3.23l2,8.15a2.6,2.6,0,0,0,2.54,2H27.47a2.6,2.6,0,0,0,2.54-2l2-8.15a2.61,2.61,0,0,0-2.54-3.23Z"
                          fill="#ffffff"
                          className="color000000, svgShape"
                        ></path>
                        <path
                          d="M9.46 14a1.25 1.25 0 0 1-1.21-1L6.46 5.23A3.21 3.21 0 0 0 3.32 2.75H1.69a1.25 1.25 0 0 1 0-2.5H3.32A5.71 5.71 0 0 1 8.9 4.66l1.78 7.77a1.24 1.24 0 0 1-.93 1.5A1.43 1.43 0 0 1 9.46 14zM15.11 34.75a4 4 0 1 1 4-4A4 4 0 0 1 15.11 34.75zm0-5.54a1.52 1.52 0 1 0 1.52 1.52A1.52 1.52 0 0 0 15.11 29.21zM28.93 34.75a4 4 0 1 1 4-4A4 4 0 0 1 28.93 34.75zm0-5.54a1.52 1.52 0 1 0 1.53 1.52A1.52 1.52 0 0 0 28.93 29.21z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                        <path
                          d="M28.93,29.21H12.27a3.89,3.89,0,1,1,0-7.78h2.65a1.25,1.25,0,1,1,0,2.5H12.27a1.39,1.39,0,1,0,0,2.78H28.93a1.25,1.25,0,0,1,0,2.5Z"
                          fill="#ffffff"
                          className="color000000 svgShape"
                        ></path>
                      </svg>
                      {/* <!-- <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{{{="display: block; height: 16 ; width: 16 ; fill: currentcolor;"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg> --> */}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="block">
              <div className="inline relative pr-2" onClick={clickHandler}>
                <button
                  type="button"
                  className="inline-flex items-center relative  -2 border rounded-full hover:bg-green-700"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                        fill: "none",
                        height: 16,
                        width: 16,
                        stroke: "white",
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5 pr-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                        height: "100%",
                        width: " 100%",
                        fill: "white",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end login --> */}
      </nav>

      {/* mobile search bar with error compensation block */}
      <section>
        <div
          className=" z-10 bg-green-600 flex items-center justify-center sm:hidden"
          style={{ height: 45, padding: "0.4rem" }}
        >
          <div className="flex rounded-full bg-white px-2 w-full h-full">
            <button className="self-center flex p-1 cursor-pointer bg-gree">
              <svg
                width="30px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z"
                    stroke="#ff5c5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z"
                    stroke="#ff5c5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z"
                    fill="#ff5c5c"
                  />{" "}
                </g>
              </svg>
            </button>

            <input
              type="text"
              className="w-full text-center flex bg-transparent pl-2 text-black outline-none"
              placeholder="Search any Product or category"
            />
            <button type="submit" className="relative p-2  rounded-full">
              <svg
                width="30px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        {/*  <!-- this is error compensation section --> */}
        <section className="sm:h-16 sm:mt-2 bg-white"></section>
      </section>
    </nav>
  );
}

export default Nav;
