import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import MdProdCard from "../ProductCard/MdProdCard";
import { useNavigate } from "react-router-dom";

function SmVerticle(props) {
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
    <section className="pb-4 mt-2 mb-2 featProdVertical1 sm:pb-6 ">
      <div className="w-full rounded-md ">
        <div className="flex flex-row items-baseline justify-between ">
          <h1 className="flex max-w-sm mt-4 ml-4 text-3xl font-bold text-green-600 sm:mt-2 items-center-center">
            {props.title} <br />
          </h1>
          {/* <!-- featured product more button --> */}
          <div className={` flex-col items-end mr-4 mt-0 justify-center`}>
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
      <div className="w-full px-4 mx-auto sm:mx-0 sm:overflow-hidden ">
        <div className="grid items-center gap-2 mt-5 s:grid-cols-2 xs:grid-cols-1 sm:flex sm:flex-row sm:justify-evenly">
          {isloading &&
            Array.from({ length: 8 }, (_, i) => (
              <div className={` relative m-auto rounded-md`}>
                <div
                  className={`aspect-square overflow-hidden h-60 w-40 sm:w-48 ss:w-48 rounded-sm mx-auto
                    ${i < 4 ? " " : "block"}
                    ${i <= 4 && i < 4 ? "hidden sm:block" : ""}
                  `}
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
                ${item.id <= 6 && item.id < 7 ? " hidden lg:block " : ""}
                ${item.id <= 7 ? "" : " 2xl:block "}
               
                `}
                dimension="h-60 w-40 sm:w-48 ss:w-48"
              ></MdProdCard>
            );
          })}

          {/* <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>

          <MdProdCard
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- hidden for xs screens --> */}
          {/* <MdProdCard
            ParentClassName="xs:hidden s:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- add more items that will appear in medium screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- add more items that will appear in large screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden lg:block"
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* <!-- items for extra lage screens  --> */}
          {/* <MdProdCard
            ParentClassName="hidden xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}

          {/* for extra lage screens */}
          {/* <MdProdCard
            ParentClassName="hidden 2xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard>
          <MdProdCard
            ParentClassName="hidden 2xl:block "
            border={false}
            dimension="h-60 w-40 sm:w-48 ss:w-48"
            src="/assets/images/Component 14.png"
          ></MdProdCard> */}
        </div>
      </div>
    </section>
  );
}

export default SmVerticle;
