import "../App.css";

import { useState, useEffect } from "react";

import Nav from "../components/Nav/Nav";
import LgCateContainer from "../components/Categories/LgCateContainer";
import Carousel from "../components/Carousel/Carousel";
import SmCateContainer from "../components/Categories/SmCateContainer";
import SmScroll from "../components/FeatProdts/SmScroll";
import PromoImg from "../components/Promotion/PromoImg";
import SmVerticle from "../components/FeatProdts/SmVerticle";
import SectionHeader from "../components/Header/SectionHeader";
import ProductGrid from "../components/views/ProductGrid/ProductGrid";
import ProdWithRightImage from "../components/views/ProdWithRightImg/ProdWithRightImage";
import ProdWithLeftImage from "../components/views/ProdWithLeftImg/ProdWithLeftImg";

import Footer from "../components/Footer/Footer";
import OfferSlider from "../components/Carousel/OfferSlider";

function Home() {
  const [ResultData, setData] = useState([]);
  const [isloading, setLoading] = useState(true);

  // const api = "http://localhost:8000/api/home";
  // useEffect(() => {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <div>
      <Nav></Nav>
      {/* <LgCateContainer></LgCateContainer> */}
      <Carousel
        isRounded={false}
        autoPlay={true}
        api={`http://192.168.29.174:8000/api/carousel`}
      ></Carousel>
      <SmCateContainer></SmCateContainer>
      <SmScroll
        title="New Products"
        api={`http://192.168.29.174:8000/api/products`}
      ></SmScroll>
      <PromoImg
        src="/assets/images/image.webp"
        alt="skillacart at skillacart"
      ></PromoImg>
      <SmVerticle
        title="Featured Products"
        api={`http://192.168.29.174:8000/api/products`}
      ></SmVerticle>
      {/* <OfferSlider
        autoPlay={true}
        effect="slide"
        api={`http://192.168.29.174:8000/api/carousel`}
      ></OfferSlider> */}

      <div class="sm:hidden">
        <SmVerticle
          title="New Arrivals"
          api="http://192.168.29.174:8000/api/products"
        ></SmVerticle>
      </div>

      <ProdWithRightImage
        title="Trending Products"
        api="http://192.168.29.174:8000/api/products"
      ></ProdWithRightImage>

      {/* featured product gird */}
      <section className="pb-2 mt-0 mb-0 bg-white sm:pb-2 lg:pb-4">
        <SectionHeader title="New Arrivals"></SectionHeader>
        <ProductGrid
          api="http://192.168.29.174:8000/api/gridProducts"
          headerVisible={false}
        ></ProductGrid>
      </section>

      {/* <ProdWithLeftImage
        title="The Best Products"
        api="http://192.168.29.174:8000/api/products"
      ></ProdWithLeftImage> */}

      {/* Product display grid */}
      <ProductGrid
        genericTitle={true}
        text="Get the latest Products"
        api="http://192.168.29.174:8000/api/gridProducts"
        headerVisible={true}
      ></ProductGrid>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
