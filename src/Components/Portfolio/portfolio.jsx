import React, { useRef } from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Fundraiser from "../../img/Fundraiser.png";

const Portfolio = () => {
  const swiperRef = useRef(null);

  const projects = [
    {
      img: Fundraiser,
      title: "Project Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      github: "https://www.github.com",
      youtube: "https://www.youtube.com",
      deployed: "https://www.vercel.com"
    },
    {
      img: Fundraiser,
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      github: "https://www.github.com",
      youtube: "https://www.youtube.com",
      deployed: "https://www.vercel.com"
    },
    {
      img: Fundraiser,
      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      github: "https://www.github.com",
      youtube: "https://www.youtube.com",
      deployed: "https://www.vercel.com"
    }
  ];

  return (
    <div className="portfolio awesome">
      <span>My Portfolio</span>
      <span>Featured Projects</span>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, type: "progressbar" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => swiperRef.current.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.autoplay.start()}
          >
            <div className="project-card">
              <img src={project.img} alt={project.title} />
              <span>{project.title}</span>
              <span>{project.description}</span>
              <div className="project-links">
                <span>
                  <i className="fab fa-github" style={{ marginRight: "5px" }}></i>
                  <a href={project.github}>Github Repository</a>
                </span>
                <span>
                  <i className="fab fa-youtube" style={{ marginRight: "5px" }}></i>
                  <a href={project.youtube}>Youtube Video</a>
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
                  <a href={project.deployed}>Deployed Link</a>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;