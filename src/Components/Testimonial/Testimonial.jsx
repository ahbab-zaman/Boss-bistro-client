import TitleSection from "../TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get("./reviews.json");
      console.log(data);
      setReviews(data);
    };
    fetchReviews();
  }, []);
  return (
    <div>
      <div>
        <TitleSection
          heading={"What Our Client Say"}
          subHeading={"testimonials"}
        ></TitleSection>
      </div>
      <div className="m-8">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide review={review} key={review._id}>
              <div className="flex flex-col gap-6 justify-center items-center">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <FaQuoteLeft className="text-[70px]"></FaQuoteLeft>
                <p className="text-gray-500 font-light text-center w-1/2 mx-auto">{review.details}</p>
                <h4 className="text-yellow-700 font-semibold text-3xl">{review.name}</h4>
              </div>
            </SwiperSlide>  
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
