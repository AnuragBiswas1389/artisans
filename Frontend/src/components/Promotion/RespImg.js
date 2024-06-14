function RespImg(props) {
  let loadSkeleton = "";

  return (
    <section className="w-full lg:w-80">
      <a href="#" className="relative block group">
        <div className="relatives h-[360px] md:h-[561px]">
          <img
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="absolute inset-0 object-cover w-full h-full opacity-100 group-hover:opacity-0"
          />

          <img
            src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-2xl font-medium text-white">Skinny Jeans Blue</h3>
          <p className="mt-1.5 max-w-[40ch] text-sx text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-green-600 rounded-md">
            Shop Now
          </span>
        </div>
      </a>
    </section>
  );
}

export default RespImg;
