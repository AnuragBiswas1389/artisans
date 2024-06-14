import { useState, useEffect } from "react";
import LgCateItem from "./LgCateItem";
import Skeleton from "react-loading-skeleton";

import "../../App.css";

// integrate the api

function LgCateContainer(props) {
  const [categoryData, setCategory] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
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
    <section className="hidden sm:block flex-row mb-2">
      <div className="mt-0 flex flex-row overflow-hidden gap-2 items-center ">
      {isloading &&
            Array.from({ length: 9 }, (_, i) => (
              <div className={` relative m-auto rounded-md`}>
                <div
                  className={`aspect-square overflow-hidden h-20 w-30 sm:w-48 ss:w-48 rounded-md mx-4`}
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
            <LgCateItem
              name={item.name}
              src={item.src}
              id={item.id}
              href={item.href}
              key={item.id}
            ></LgCateItem>
          );
        })}
      </div>
    </section>
  );
}

export default LgCateContainer;
