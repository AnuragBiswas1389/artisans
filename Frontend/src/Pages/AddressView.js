import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import AddAdressBook from "../components/Addressbook/AddAdressBook";
import Addressbook from "../components/Addressbook/Addressbook";

function AddressView() {
  function handelDefaultSelection() {
    //logic
  }
  return (
    <>
      <Nav></Nav>
      <section class="p-4">
        <div class="relative shadow-lg bg-clip-border bg-white text-white flex h-full min-h-[150px] w-full flex-col items-center justify-center rounded-xl !bg-green-600 px-8">
          <div class="container mx-auto text-center">
            <h2 class="block antialiased tracking-normal font-sans text-4xl font-bold leading-[1.3] text-white mb-4">
              Adress Book
            </h2>
            <p class="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-8">
              Create, Edit Your Addresses
            </p>
          </div>
        </div>
        <div class="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* start */}
            <Addressbook></Addressbook>
            {/* end */}
            <AddAdressBook></AddAdressBook>
            <div className="hidden lg:block">
              {/* hidden items */}
            <AddAdressBook></AddAdressBook>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default AddressView;
