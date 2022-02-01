import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Banner1 from "../Images/BannerImages/Banner1.jpg";
import Banner2 from "../Images/BannerImages/Banner2.jpg";
import Banner3 from "../Images/BannerImages/Banner3.jpg";
import Banner4 from "../Images/BannerImages/Banner4.jpg";
import Banner5 from "../Images/BannerImages/Banner5.jpg";
import Banner6 from "../Images/BannerImages/Banner6.jpg";

const BannerSlider = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper" loop={true}>
        <SwiperSlide>
          <img src={Banner1} alt="Banner Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="Banner Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner5} alt="Banner Img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner6} alt="Banner Img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
