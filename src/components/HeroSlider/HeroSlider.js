import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import medical1 from '../../Assets/309-3091004_medical-wallpaper-hd-medical.jpg'
import medical2 from '../../Assets/Medical-Wallpapers-HD-Free-download.jpg'
import medical3 from '../../Assets/flat-lay-health-still-life-arrangement-with-copy-space.jpg'
import medical4 from '../../Assets/visera_4k_surgeon_v2.jpg'
import medical5 from '../../Assets/thumb-1920-697207.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./heroSlider.css";

const HeroSlider = () => {
  return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          rewind={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img  className="swiping-img" src={medical1} alt="medical" />   </SwiperSlide>
        <SwiperSlide><img className="swiping-img" src={medical2} alt="medical" /></SwiperSlide>
        <SwiperSlide><img className="swiping-img" src={medical3} alt="medical" /></SwiperSlide>
        <SwiperSlide><img className="swiping-img" src={medical4} alt="medical" /></SwiperSlide>
        <SwiperSlide><img className="swiping-img" src={medical5} alt="medical" /></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default HeroSlider