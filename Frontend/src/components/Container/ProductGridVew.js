function ProductGridView(props) {
    return (
      <section class="bg-white py-12 text-gray-700 sm:py-9 ">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {`${props.children}`}
            </div>
      </section>
    );
}

export default ProductGridView;