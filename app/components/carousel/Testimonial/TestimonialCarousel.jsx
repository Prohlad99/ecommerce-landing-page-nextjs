"use client";
import { reviews } from "@/public/utilities/reviews";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Testimonial from "./Testimonial";
const TestimonialCarousel = () => {
  const [reviewsItem, setReviewsItem] = useState([]);
  useEffect(() => {
    setReviewsItem(reviews);
  }, []);
  console.log(reviews);

  return (
    <div className="md:mb-28 mb-16 mt-[80px]">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-blue-400">
          What's Our Client Says?
        </h1>
        <div className="w-[80px] h-[5px] bg-blue-600 rounded-full mx-auto my-3"></div>
      </div>
      <Carousel
        infiniteLoop={true}
        autoPlay
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {reviewsItem?.map((review) => (
          <Testimonial key={review._id} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
