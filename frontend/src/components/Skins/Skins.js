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
import background from "../images/background-2.png";

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
              <h1 className="text">Pantheon</h1>
              <img
                src={require("./1.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Pantheon Ashen Conqueror Pantheon</h1>
              <img
                src={require("./2.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Prestige Ascended Pantheon</h1>
              <img
                src={require("./3.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Ruined Pantheon</h1>
              <img
                src={require("./4.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="text">Pulsefire Pantheon</h1>
              <img
                src={require("./5.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Baker Pantheon</h1>
              <img
                src={require("./6.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Zombie Slayer Pantheon</h1>
              <img
                src={require("./7.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="text">Dragonslayer Pantheon</h1>
              <img
                src={require("./8.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Glaive Warrior Pantheon</h1>
              <img
                src={require("./9.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Full Metal Pantheon</h1>
              <img
                src={require("./10.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Perseus Pantheon</h1>
              <img
                src={require("./11.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Ruthless Pantheon</h1>
              <img
                src={require("./12.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Myrmidon Pantheon</h1>
              <img
                src={require("./13.jpg")}
                alt="Phanteon Skins"
                className="img_skins"
              />
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text">Chosen of the Wolf Pantheon</h1>
              <img
                src={require("./14.jpg")}
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