import { Link } from "react-router-dom";

function LgCateItem(props) {
  return (
    <article className="relative m-auto w-28 h-28" key={props.id}>
      <Link to={props.href}>
        <div className="overflow-hidden hidden">
          {/* <!-- product image here-- --> */}
          <img className=" object-cover" src={props.src} alt={props.alt} />
        </div>
        <div className="">
          {/* <!-- product title here --> */}
          <h3 className=" from-neutral-600 text-base text-center">
            {props.name}
          </h3>
        </div>
      </Link>
    </article>
  );
}

export default LgCateItem;
