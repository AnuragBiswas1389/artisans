import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";

function PromoImg(props) {
  return (
    <section className="w-full mb-2 sm:hidden">
      <section className="mb-2 sm:hidden w-full">
        <Link to={props.href}>
          <div
            className={`overflow-hidden w-full  ${
              props.dimension ? "" : "h-64"
            }`}
          >
            <LazyLoadImage
              src={props.src}
              width="100%"
              height="100%"
              placeholderSrc="/assets/images/DefPlaceholder.svg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Link>
      </section>
    </section>
  );
}

export default PromoImg;
