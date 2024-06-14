function ProductVariation(props) {
  return (
    <div>
      <h2 class="mt-8 font-bold text-lg text-gray-900">Choose Product type</h2>
      <div class="mt-3 flex select-none flex-wrap items-center justify-evenly ">
        <label class="">
          <input
            type="radio"
            name="subscription"
            value="4 Months"
            class="peer sr-only"
          />
          <p class="peer-checked:bg-green-600 peer-checked:text-white rounded-lg border border-green-600 px-6 py-2 font-bold">
            4 Months
          </p>
          <span class="mt-1 block text-center text-xs">$80/mo</span>
        </label>
        <label class="">
          <input
            type="radio"
            name="subscription"
            value="8 Months"
            class="peer sr-only"
            checked
          />
          <p class="peer-checked:bg-green-600 peer-checked:text-white rounded-lg border border-green-600 px-6 py-2 font-bold">
            8 Months
          </p>
          <span class="mt-1 block text-center text-xs">$60/mo</span>
        </label>
        <label class="">
          <input
            type="radio"
            name="subscription"
            value="12 Months"
            class="peer sr-only"
          />
          <p class="peer-checked:bg-green-600 peer-checked:text-white rounded-lg border border-green-600 px-6 py-2 font-bold">
            12 Months
          </p>
          <span class="mt-1 block text-center text-xs">$40/mo</span>
        </label>
      </div>
    </div>
  );
}


export default ProductVariation;