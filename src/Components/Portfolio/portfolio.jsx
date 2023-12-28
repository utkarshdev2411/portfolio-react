

import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Fundraiser from "../../img/Fundraiser.png";
import Slack from "../../img/SlackCloe.png";
import Newsletter from "../../img/Newsletter.png";
import Simongame from "../../img/Simongame.png";
import Drumkit from "../../img/Drumkit.png";
import Todo from "../../img/Todo.png";
import Purva from '../../img/Purva.png'

import Portfolioweb from "../../img/Portfolio.png";




const portfolio = () => {
 
  return (
    <div className="portfolio" >
      {/* heading */}
      <span >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Fundraiser} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slack} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Newsletter} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Simongame} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drumkit} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Purva} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolioweb} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default portfolio;
