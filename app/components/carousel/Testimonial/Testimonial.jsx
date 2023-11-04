import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Testimonial = ({ review }) => {
  // const{ name, details, rating} = review
  return (
    <div className="mt-10">
      {/* container  */}
      <div></div>
      <div>
        {/* rating  */}
        <div className="flex justify-center items-center">
          {review?.rating === 1 ? (
            <div className="flex justify-center items-center text-lg">
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          ) : review?.rating === 2 ? (
            <div className="flex justify-center items-center text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          ) : review?.rating === 3 ? (
            <div className="flex justify-center items-center text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          ) : review?.rating === 4 ? (
            <div className="flex justify-center items-center text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          ) : review?.rating === 4 ? (
            <div className="flex justify-center items-center text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          ) : (
            <div className="flex justify-center items-center text-lg">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          )}
        </div>

        {/* quote  */}
        <div className="flex justify-center items-center max-w-[30px] mx-auto">
          <img className=" my-4 " src="/images/quote.png" alt="" />
        </div>
        {/* content  */}
        <div className="flex justify-center items-center">
          <p className="max-w-[50%] text-center">{review?.details}</p>
        </div>

        {/* name  */}
        <div className="flex justify-center">
          <h1 className="text-[#CD9003] text-xl my-4">{review?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
