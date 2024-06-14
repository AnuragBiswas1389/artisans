import MdProdCard from "../ProductCard/MdProdCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function SmScroll(props) {
  const [productsData, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch(props.api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const navigate = useNavigate();

  function handelButtonClick() {
    navigate("/grid", { replace: false });
    console.log("button clicked");
  }

  return (
    <section className="pb-2 m-0 mb-2 sm:mb-0 sm:h-auto featProdScroll">
      <div className="w-full rounded-md">
        <div className="flex flex-row items-baseline justify-between ">
          <h1 className="flex max-w-sm ml-4 text-3xl font-bold text-green-600 sm:mt-2 items-center-center">
            {props.title} <br />
          </h1>
          {/*<!-- featured product more button --> */}
          <div className="flex-col items-end justify-center mt-0 mr-4 ">
            <button
              className="w-16 h-8 text-lg font-bold text-white bg-green-600 rounded-md"
              onClick={handelButtonClick}
            >
              more
            </button>
          </div>
        </div>
      </div>
      {/* <!-- product section  --> */}
      <div className="pl-0 mb-2 ">
        <div className="flex justify-start w-full pt-2 pl-2 mt-5 overflow-x-auto sm:mt-0 space-x-auto noScroll sm:flex-row sm:justify-evenly ">
          {isloading &&
            Array.from({ length: 9 }, (_, i) => (
              <div className={` relative m-auto rounded-md`}>
                <div
                  className={`aspect-square overflow-hidden h-60 w-40 sm:w-48 ss:w-48 rounded-md mx-4`}
                >
                  <Skeleton
                    width={"100%"}
                    height={"100%"}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  ></Skeleton>
                </div>
              </div>
            ))}

          {productsData.map((item) => {
            return (
              <MdProdCard
                src={item.src}
                alt={item.name}
                ParentClassName={`
                ${item.id < 4 ? " " : "sm:hidden"}
                ${item.id <= 4 && item.id < 5 ? "md:block " : ""}
                ${item.id <= 6 && item.id < 7 ? "  lg:block " : ""}
                ${item.id <= 7 ? "" : " 2xl:block "}
                `}
                dimension="h-60 w-40 sm:w-48 ss:w-48 mx-1"
              ></MdProdCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SmScroll;
