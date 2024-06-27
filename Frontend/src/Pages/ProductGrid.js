import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import GridProd from "../components/ProductCard/GridProd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MdProdCard from "../components/ProductCard/MdProdCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductGrid(props) {
  const [productsData, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true);

  const api = "http://localhost:8000/api/products";

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function clickHandler() {}

  return (
    <section>
      <Nav></Nav>
      {/* product section */}
      <section class="bg-white pb-12 text-gray-700 sm:py-9 ">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mt-10 mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
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
                <GridProd
                  src={item.image}
                  title={item.name}
                  id={item._id}
                  price={item.price}
                  onclick={clickHandler}
                  ParentClassName={`
                ${item.id < 4 ? " " : "sm:hidden"}
                ${item.id <= 4 && item.id < 5 ? "md:block " : ""}
                ${item.id <= 6 && item.id < 7 ? "  lg:block " : ""}
                ${item.id <= 7 ? "" : " 2xl:block "}
                `}
                  dimension="h-60 w-40 sm:w-48 ss:w-48 mx-1"
                ></GridProd>
              );
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default ProductGrid;
