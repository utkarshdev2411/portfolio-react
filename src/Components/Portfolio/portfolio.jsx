import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Fundraiser from "../../img/Fundraiser.png";

const portfolio = () => {
  return (
    <div className="portfolio awesome">
      <span>My Portfolio</span>
      <span>Featured Projects</span>

      <Swiper modules={[Pagination]}
        pagination={{ type: 'progressbar', }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>



      </Swiper>
      <div className="project-card">
        <img src={Fundraiser} alt="Fundraiser" />
        <span> Title</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
          aliquip ex ea commodo consequat.
        </span>
        <span>
          <span>
            <i className="fab fa-github" style={{ marginRight: "5px" }}></i>
            <a href="https://www.github.com">Github Repository</a>
          </span>
          <span>
            <i className="fab fa-youtube" style={{ marginRight: "5px" }}></i>
            <a href="https://www.youtube.com">Youtube Video</a>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "20px", marginRight: "5px" }}
            >
              <path d="M12 0L24 24H0L12 0z" />
            </svg>
            <a href="https://www.vercel.com">Deployed Link</a>
          </span>
        </span>

      </div>



    </div>
  );
};

export default portfolio;