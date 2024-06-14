import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

import OrderedItem from "../components/OrderedItem/OrderedItem";

function Orders() {
  return (
    <div class="bg-white">
      <Nav></Nav>
      <main class="bg-white px-4 pt-2 sm:px-6 ">
        <div class="mx-auto max-w-5xl">
          <div class="max-w-xl">
            <p class="mt-2 text-4xl font-bold tracking-tight">Your Orders</p>
          </div>
          <section aria-labelledby="order-heading" class="mt-10">
            <OrderedItem
              title="Cold Brew Bottle"
              heading=" This glass bottle comes with a mesh insert for steeping tea
                    or cold-brewing coffee"
              price={200}
              quantity={1}
              status="Delivered"
              img="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
            ></OrderedItem>

            <OrderedItem
              title="Cold Brew Bottle"
              heading=" This glass bottle comes with a mesh insert for steeping tea
                    or cold-brewing coffee"
              price={200}
              quantity={1}
              status="Delivered"
              img="https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg"
            ></OrderedItem>
          </section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Orders;
