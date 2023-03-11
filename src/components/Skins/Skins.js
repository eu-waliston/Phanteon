import React, { useRef, useState } from "react";
import "./Skins.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

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
            <SwiperSlide>
              <h1 className="text">Phanteon</h1>
              <img
                src={require("../images/Pantheon_0.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">myrmidon phanteon</h1>
              <img
                src={require("../images/Pantheon_1.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">ruthless Phanteon</h1>
              <img
                src={require("../images/Pantheon_2.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">perseus Phanteon</h1>
              <img
                src={require("../images/Pantheon_3.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">full metal Phanteon</h1>
              <img
                src={require("../images/Pantheon_4.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">glaive warrior Phanteon</h1>
              <img
                src={require("../images/Pantheon_5.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">dragonslayer Phanteon</h1>
              <img
                src={require("../images/Pantheon_6.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">zoombie Phanteon</h1>
              <img
                src={require("../images/Pantheon_7.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">baker Phanteon</h1>
              <img
                src={require("../images/Pantheon_8.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">pulsefire Phanteon</h1>
              <img
                src={require("../images/Pantheon_16.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">ruined Phanteon</h1>
              <img
                src={require("../images/Pantheon_25.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text"> prestige ascended Phanteon</h1>
              <img
                src={require("../images/Pantheon_26.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
            <h1 className="text">ashen conqueror Phanteon</h1>
              <img
                src={require("../images/Pantheon_36.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skins;
