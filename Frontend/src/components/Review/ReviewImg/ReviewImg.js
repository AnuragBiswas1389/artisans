function ReviewImg(props) {
    return (
      <section
        class={`flex-shrink-0 rounded-md border-2 ${
          props.forReviewCard ? "h-36 w-36" : "w-28 h-28"
        }`}
      >
        <img
          src={props.image}
          alt="review image"
        />
      </section>
    );
}

export default ReviewImg;