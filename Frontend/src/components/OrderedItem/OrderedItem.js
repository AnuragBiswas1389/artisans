function OrderedItem(props) {
  return (
    <>
      <div class="flex flex-col space-x-6 border-b border-gray-200 py-6">
        <div className="flex flex-row  px-2">
          <img
            src={props.img}
            alt="heading"
            class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
          ></img>
          <div class="px-2">
            <h4 class="font-medium text-gray-900">
              <a href="#">{props.title}</a>
            </h4>
            <p class="text-sm text-gray-600">{props.heading}.</p>
          </div>
        </div>

        <div class="flex flex-auto flex-col">
          <div class="mt-2 flex flex-1 items-end ">
            <dl class="flex justify-evenly md:justify-start space-x-2 divide-x divide-gray-200 text-sm sm:space-x-6 w-full">
              <div class="flex">
                <dt class="font-medium text-gray-900">Quantity</dt>
                <dd class="ml-2 text-gray-700">{props.quantity}</dd>
              </div>
              <div class="flex pl-2 sm:pl-2">
                <dt class="font-medium text-gray-900">Price</dt>
                <dd class="ml-2 text-gray-700">RS.{props.price}</dd>
              </div>
              <div class="flex pl-2 sm:pl-2">
                <dt class="font-medium text-gray-900">Status</dt>
                <a class="ml-2 text-green-600" href="#">
                  {props.status}
                </a>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderedItem;
