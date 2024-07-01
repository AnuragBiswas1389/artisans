import { useState, useEffect } from "react";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import OrderedItem from "../components/OrderedItem/OrderedItem";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import ErrorAlert from "../components/Alerts/ErrorAlert";

function Orders() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((errro) => {
        setError(true);
      });
  }, []);

  return (
    <div class="bg-white">
      <Nav></Nav>
      {error && <ErrorAlert />}
      <main class="bg-white px-4 pt-2 sm:px-6 ">
        <div class="mx-auto max-w-5xl">
          <div class="max-w-xl">
            <p class="mt-2 text-4xl font-bold tracking-tight">Your Orders</p>
          </div>
          <section aria-labelledby="order-heading" class="mt-10">
            {loading &&
              Array.from({ length: 4 }, (_, i) => (
                <div className={` flex rounded-md `}>
                  <div className={`rounded-md overflow-hidden h-28 w-28 `}>
                    <Skeleton
                      width={"100%"}
                      height={"100%"}
                      baseColor="rgb(229 231 235)"
                      highlightColor="rgb(209 213 219)"
                    ></Skeleton>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-52 h-4 pl-4 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                    <div className="w-52 h-4 pl-4 pt-4">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                    <div className="w-52 h-4 pl-4 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                    <div className="w-36 h-4 pl-4 pt-2 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                    <div className="w-20 h-4 pl-4 pt-2 ">
                      <Skeleton
                        width={"100%"}
                        height={"100%"}
                        baseColor="rgb(229 231 235)"
                        highlightColor="rgb(209 213 219)"
                      ></Skeleton>
                    </div>
                  </div>
                </div>
              ))}
            {!loading &&
              data.map((item) => {
                <OrderedItem
                  title="Cold Brew Bottle"
                  heading=" This glass bottle comes with a mesh insert for steeping tea
                    or cold-brewing coffee"
                  price={200}
                  quantity={1}
                  status="Delivered"
                  img="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
                ></OrderedItem>;
              })}
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Orders;
