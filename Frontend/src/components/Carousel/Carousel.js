import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./CarouselStyle.css";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function Carousel(props) {
  const [carouselData, setCarousel] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoaded, setLoad] = useState(false);

  let borderRadius = props.isRounded ? "8px" : "0";
  let config = {};
  let content = "";

  if (props.autoPlay) {
    config = {
      delay: 4300,
      disableOnInteraction: false,
    };
  } else {
    config = false;
  }

  //featching data
  useEffect(() => {
    fetch(props.api)
      .then((res) => res.json())
      .then((data) => {
        setCarousel(data);
        setError(false);
        setLoad(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  }, []);

  //no data placeholder

  const placeholder = (
    <div className={`w-full h-64 sm:h-80`}>
      <LazyLoadImage
        src="/assets/images/DefPlaceholder.svg"
        width="100%"
        height="100%"
        style={{
          borderRadius: borderRadius,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );

  if (isLoaded == false) {
    content = placeholder;
  }
  if (isError == true) {
    content = (
      <div className={"w-full h-64 sm:h-80"}>
        <LazyLoadImage
          src="/assets/images/DefErrorPlaceholder.svg"
          width="100%"
          height="100%"
          style={{
            borderRadius: borderRadius,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={config}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {content}
        {carouselData.map((item) => {
          return (
            <SwiperSlide>
              <div
                className={`w-full ${
                  props.forProduct
                    ? " h-80 sm:h-[30rem] "
                    : "h-[18rem] sm:h-[30rem]"
                }`}
              >
                <Link to={item.href}>
                  <LazyLoadImage
                    key={item.id}
                    src={item.image}
                    width="100%"
                    height="100%"
                    placeholderSrc={""}
                    style={{
                      borderRadius: borderRadius,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
