function LgImg(props) {
  return (
    <div className="hidden bg-white lg:block">
      <a className="w-full h-full">
        <img
          src="/assets/images/offerRect.png"
          className="object-cover "
          style={{ height: "563px" }}
        ></img>
      </a>
    </div>
  );
}

export default LgImg;
