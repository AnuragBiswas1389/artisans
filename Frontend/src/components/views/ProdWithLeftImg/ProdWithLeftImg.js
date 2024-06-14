import SectionHeader from "../../Header/SectionHeader";
import MdProdCard from "../../ProductCard/MdProdCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import LgImg from "../../Promotion/LgImg";
import RespImg from "../../Promotion/RespImg";

function ProdWithLeftImage(props) {
  const [productsData, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.29.174:8000/api/products")
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
    navigate("/product", { replace: false });
  }

  return (
    <section class="flex flex-col lg:flex-row md:w-full lg:w-full lg:gap-3 justify-between w-full">
      <div className="">
        <RespImg></RespImg>
      </div>
      <div class=" bg-white w-full ">
        <SectionHeader title={props.title}></SectionHeader>
        <div class="bg-white py-2  sm:overflow-hidden px-1">
          <div class=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center pb-4">
            {/* for all screens*/}

            {isloading &&
              Array.from({ length: 10 }, (_, i) => (
                <div className={` relative m-auto rounded-md`}>
                  <div
                    className={`aspect-square overflow-hidden h-60 w-48 sm:w-48 ss:w-48 rounded-md mx-2 
                      ${i == 9 ? "lg:hidden xl:block" : "block"}${
                      i > 10 ? "lg:hidden xl:block" : "md:hidden xl:block"
                    }
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
                  href={item.href}
                  ParentClassName={`
                    ${item.id < 7 ? "" : " hidden sm:block"}
                    ${
                      item.id == 9
                        ? "sm:hidden md:hidden lg:hidden xl:block"
                        : " "
                    }
                    ${item.id == 10 ? "lg:hidden xl:block" : " "}
               
                `}
                  dimension="h-60 w-40 sm:w-48 ss:w-48"
                ></MdProdCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* section for larger screens.. logic here? */}
    </section>
  );
}

export default ProdWithLeftImage;
