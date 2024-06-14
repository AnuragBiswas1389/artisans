import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import Rating from "../Rating/starRating/StarRating";

function GridProd(props) {
  return (
    <Link>
      <article
        className={`relative border border-green-600 shadow-md rounded-md mx-auto sm:px-2s
        sm:w-60 w-50 overflow-hidden mb-2 ${props.parentClassName}`}
      >
        <div className="w-full overflow-hidden h-52 sm:w-60">
          <LazyLoadImage
            src={props.src}
            width="100%"
            height="100%"
            placeholderSrc="/assets/images/DefPlaceholder.svg"
            style={{
              borderRadius: "0.375rem",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          />
        </div>
        {/* <!-- sale badge here --> */}
        <div
          className={`absolute top-0 rounded-md ${
            props.onSale == "true" ? "block" : "hidden"
          }`}
        >
          <p className="text-[10px] rounded-md  font-bold text-center bg-green-600 p-1 w-10 sm:w-12 text-white sm:px-3 sm:py-1">
            Sale
          </p>
        </div>
        <div className="flex items-start justify-between px-1 mt-4">
          <div className="">
            {/* <!-- product title here --> */}
            <h3 className="text-sm font-semibold sm:text-sm ">
              <a href="#" title="" className="cursor-pointer">
                {props.title}
              </a>
            </h3>
            {/* <!-- ratings section here --> */}
            <div className="flex items-center mt-2">
              <Rating rating={props.rating}></Rating>
            </div>
          </div>
        </div>
        {/* <!-- product price --> */}
        <div className="flex items-baseline justify-between px-1 mt-1 mb-2 text-left">
          <p className="font-bold text-md sm:text-sm md:text-base">
            ${props.price}
          </p>
          {/* <!-- product like button --> */}
          <button className="px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
            </svg>
          </button>
        </div>
      </article>
    </Link>
  );
}

export default GridProd;
