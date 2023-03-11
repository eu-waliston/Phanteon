import React from "react";
import "./BaseStatus.css";

import blur_background from "../images/blur-fundo.png";
import background from "../images/Phanteon_background.png";

import Navbar from "../Nav/Navbar";

const BaseStatus = () => {
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

        <div className="status__base_section">
          <div className="up__">
            <h3 className="base_statics">base statistics</h3>
            <div className="base__statistics">
              <div>
                <i class="fa-solid fa-heart"></i>
                <p>health</p>
                <p>650+109</p>
              </div>

              <div>
                <i class="fa-solid fa-heart"></i>
                <p>Health regen. (per 5s)</p>
                <p>6+0.65</p>
              </div>

              <div>
                <i class="bi bi-shield-fill"></i>
                <p>armor</p>
                <p>40+4.95</p>
              </div>

              <div>
                <i class="bi bi-record-circle-fill"></i>
                <p>magic resist</p>
                <p>28+2.05</p>
              </div>

              <div>
                <i class="fa-solid fa-gauge-high"></i>
                <p>Move Speed</p>
                <p>345</p>
              </div>

              <div>
                <i class="fa-solid fa-droplet"></i>
                <p>mana</p>
                <p>371+31</p>
              </div>

              <div>
                <i class="fa-solid fa-droplet"></i>
                <p>Mana regen. (per 5s)</p>
                <p>7.35+0.45</p>
              </div>

              <div>
                <i class="fa-solid fa-hand-fist"></i>
                <p>Attack damage</p>
                <p>64+3.3</p>
              </div>

              <div>
                <i class="fa-solid fa-burst"></i>
                <p>Crit. damage</p>
                <p>175%</p>
              </div>

              <div className="dmg">
                <i class="fa-regular fa-circle"></i>
                <p>Attack range</p>
                <p>175</p>
              </div>
            </div>
          </div>

          <div className="up_">
            <h3 className="base_statics">Attack speed</h3>
            <div className="attack__speed">
              <div>
                <i class="fa-solid fa-hand"></i>
                <p>base AS</p>
                <p>0.658</p>
              </div>

              <div>
              <i class="fa-solid fa-hand"></i>
                <p>AS ratio</p>
                <p>N/A</p>
              </div>

              <div>
              <i class="fa-solid fa-hand"></i>
                <p>Attack windup</p>
                <p>19.031%</p>
              </div>

              <div>
              <i class="fa-solid fa-hand"></i>
                <p>Bonus AS</p>
                <p>+2.95%</p>
              </div>
            </div>
          </div>

          <div className="up">
            <h3 className="base_statics">Unit radius</h3>
            <div className="unit__radius">
              <div>
                <i class="fa-solid fa-circle"></i>
                <p>gameplay radius</p>
                <p>65</p>
              </div>

              <div>
                <i class="fa-solid fa-arrows-to-dot"></i>
                <p>Selection radius</p>
                <p>125</p>
              </div>

              <div>
                <i class="fa-solid fa-shoe-prints"></i>
                <p>Pathing radius</p>
                <p>35</p>
              </div>

              <div>
                <i class="fa-solid fa-bullseye"></i>
                <p>Acq. radius</p>
                <p>600</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseStatus;
