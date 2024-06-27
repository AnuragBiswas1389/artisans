import { Link } from "react-router-dom";

function LgCateItem(props) {
  return (
    <article className="relative m-0 bg-green-600" key={props.id}>
      <Link to={props.href}>
        <div className="overflow-hidden w-h-full h-full">
          {/* <!-- product image here-- --> */}
          <img
            className=" object-contain w-h-full h-full"
            src={props.image}
            alt={props.alt}
          />
        </div>
        {/* <div className="">
         
          <h3 className=" from-neutral-600 text-base text-center">
            {props.name}
          </h3>
        </div> */}
      </Link>
    </article>
  );
}

export default LgCateItem;
