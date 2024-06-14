function GridHeader(props) {
  return (
    <div
      class={`mx-auto max-w-md text-center ${
        props.visible ? "block" : "hidden"
      }`}
    >
      <h2
        class={`text-2xl font-bold sm:text-3xl ${
          props.genericTitle ? "hidden" : "block"
        }`}
      >
        {`${props.title}`}
      </h2>
      <h2
        class={`text-2xl font-bold sm:text-3xl ${
          props.genericTitle ? "block" : "hidden"
        }`}
      >
        Products You Will{" "}
        <p className="inline-block font-bold text-green-600">Love !</p>
      </h2>
      <p class="mt-1 text-base text-green-600">{`${props.text}`}</p>
    </div>
  );
}

export default GridHeader;
