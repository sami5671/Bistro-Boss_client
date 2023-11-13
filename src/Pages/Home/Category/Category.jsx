import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            SALADS
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            PIZZAS
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            SOUPES
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            DESSERTS
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            SALADS
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            SOUPES
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
