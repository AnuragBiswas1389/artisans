import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import GridHeader from "../../Header/GridHeader";
import GridProd from "../../ProductCard/GridProd";

function ProductGrid(props) {
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

  return (
    <section
      class={`bg-white py-0 text-gray-700 w-full ${
        props.headerVisible ? "sm:py-2" : "sm:py-0"
      }`}
    >
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 w-full">
        <div
          class={`mx-auto  max-w-md text-center ${
            props.headerVisible ? "block mt-10 mb-10 lg:mb-10" : "hidden"
          }`}
        >
          <GridHeader
            visible={props.headerVisible}
            genericTitle={props.genericTitle}
            title={props.title}
            text={props.text}
          ></GridHeader>
        </div>
        <div class=" relative  mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-4">
          {isloading &&
            Array.from({ length: 4 }, (_, i) => (
              <div className={`m-auto rounded-md relative`}>
                <div
                  className={`aspect-square overflow-hidden ss:w-48 h-52 w-full sm:w-60 rounded-sm mx-auto
                  `}
                >
                  <Skeleton
                    width={"100%"}
                    height={"100%"}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  ></Skeleton>
                </div>
                <div className="relative">
                  <Skeleton
                    count={2}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  />
                  <Skeleton
                    width={"40%"}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  />
                  <Skeleton
                    width={"18%"}
                    baseColor="rgb(229 231 235)"
                    highlightColor="rgb(209 213 219)"
                  />
                </div>
              </div>
            ))}

          {productsData.slice(0, 8).map((item) => {
            return (
              <GridProd
                src={item.image}
                title={item.name}
                onSale={item.onSale}
                rating={4}
                price={item.price}
                id={item._id}
                parentClassName={`${
                  item.id == 9 ? "hidden md:block lg:hidden" : " "
                }`}
              ></GridProd>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
