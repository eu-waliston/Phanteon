import React from "react";
import "./Skins.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importe os módulos do Swiper da maneira correta para v8+
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import blur_background from "../images/blur-fundo.png";
import background from "../images/Phanteon_background.png";

import Navbar from "../Nav/Navbar";

const Skins = () => {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${blur_background})` }}
    >
      <div
        className="home__section"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />

        <div className="skins_slider_section">
          <h1 className="avaliable">AVAILABLE&nbsp; SKINS</h1>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {/* Seus SwiperSlides aqui... */}
            <SwiperSlide>
              <h1 className="text">PANTHEON</h1>
              <img
                src={require("../images/Pantheon_0.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">myrmidon PANTHEON</h1>
              <img
                src={require("../images/Pantheon_1.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            {/* ... resto dos seus slides */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skins;