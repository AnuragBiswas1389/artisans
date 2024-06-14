import "../../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useState, useEffect } from "react";
import MdProdCard from "../ProductCard/MdProdCard";

function SmCateContainer(props) {
  const [categoryData, setCategory] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.29.174:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section className="pb-0">
      {/* <!-- product categories for mobile screen --> */}
      <section
        className="pb-8 mt-2 categories sm:hidden sm:rounded-md sm:border sm:border-green-600 "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + `/assets/images/${props.backgroundImage}`
          })`,
        }}
      >
        <div className="flex flex-row items-baseline justify-between ">
          <h1 className="flex max-w-sm mt-2 ml-4 text-3xl font-bold text-green-600 sm:mt-2 items-center-center">
            Categories <br />
          </h1>
          {/* <!-- featured product more button --> */}
          <div className={`  sm:block  flex-col items-end mt-0 justify-center`}>
            <button className="w-16 h-8 mr-4 text-lg font-bold text-white bg-green-600 rounded-md">
              more
            </button>
          </div>
        </div>
        {/* <!-- product section  --> */}
        <div className="max-w-screen-xl px-2 mx-auto mt-4">
          <div className="grid items-center gap-2 mt-2 s:grid-cols-3 xs:grid-cols-2 sm:grid-cols-3 sm:overflow-hidden ">
            {isloading &&
              Array.from({ length: 9 }, (_, i) => (
                <div className={`relative m-auto rounded-md`}>
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
                </div>
              ))}

            {categoryData.map((item) => {
              return (
                <MdProdCard
                  border={false}
                  dimension={"h-28 w-28"}
                  src={item.src}
                  href={item.href}
                  isError={false}
                  ParentClassName={`${
                    item.id == 9 ? "xs:hidden s:block " : " "
                  }`}
                ></MdProdCard>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

export default SmCateContainer;
