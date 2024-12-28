import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TitleSection from "../TitleSection/TitleSection";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"
const Category = () => {
  return (
    <div>
        <div>
            <TitleSection subHeading="order online" heading="From 11am to 10pm" ></TitleSection>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[80%] mx-auto my-6"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Category;
