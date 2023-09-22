"use client";
import React, { useEffect } from "react";
import BannerHeader from "./BannerHeader";
import IconCheck from "./IconCheck";
import IconCheckCircle from "./IconCheckCircle";
import IconHeart from "./IconHeart";
import IconTruck from "./IconTruck";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import ArrowHeader from "./ArrowHeader";

const Header = () => {
  return (
    <header className="flex flex-row max-h-fit  justify-center md:justify-around  md:cursor-pointer bg-slate-800 ">
      <Swiper
        className="flex flex-row cursor-grab min-w-[360px] max-h-[42px]  justify-between md:justify-around md:p-0 bg-slate-800"
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          920: { slidesPerView: 2 },
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <BannerHeader
            icon={<IconCheck />}
            text="30-DAY SATISFACTION GUARANTEE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerHeader
            icon={<IconTruck />}
            text="FREE DELIVERY ON ODERS OVER $40.000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerHeader icon={<IconHeart />} text="50.000 + HAPPY CUSTOMERS" />
        </SwiperSlide>
        <SwiperSlide>
          <BannerHeader
            icon={<IconCheckCircle />}
            text="100% Money Back Guarantee"
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
