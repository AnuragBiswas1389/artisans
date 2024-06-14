import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import GridProd from "../components/ProductCard/GridProd";

function ProductGrid(props) {
  return (
    <section>
      <Nav></Nav>
      {/* product section */}
      <section class="bg-white pb-12 text-gray-700 sm:py-9 ">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mt-10 mx-auto grid s:grid-cols-2 xs:grid-cols-1 items-center gap-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
            <GridProd Display={true} />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default ProductGrid;
