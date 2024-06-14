import ReviewImg from "../ReviewImg/ReviewImg";
import SectionHeader from "../../Header/SectionHeader";

function PhotoReview(props) {
  return (
    <section>
      <div class="text-left ">
        <SectionHeader
          title="Review with Photos"
          inlineButton="True"
        ></SectionHeader>
        {/* <!-- user uploaded review image section --> */}
        <section class="flex w-full overflow-x-auto space-x-6 noScroll">
          <ReviewImg forReviewCard="true"></ReviewImg>
          <ReviewImg forReviewCard="true"></ReviewImg>
          <ReviewImg forReviewCard="true"></ReviewImg>
          <ReviewImg forReviewCard="true"></ReviewImg>
        </section>
      </div>
    </section>
  );
}

export default PhotoReview;
