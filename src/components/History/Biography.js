import React from "react";
import "./Biography.css";

import blur_background from "../images/blur-fundo.png";
import background from "../images/Phanteon_background.png";

import Navbar from "../Nav/Navbar";

const Biography = () => {
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
        <div className="byography">
            <div className="role__square">
                <img src={require("../images/fighter.png")}  alt="role" className="role"/>
                <p className="p1">role</p>
                <p className="p2">fighter</p>
            </div>
            <div className="dificult__square">
                <div className="status">
                    <div className="suqare__1"></div>
                    <div className="suqare__2"></div>
                    <div className="suqare__3"></div>
                </div>
                <p className="p3">difficulty</p>
                <p className="p4">moderate</p>
            </div>
            <div className="biography__Section">
                <h3 className="bio">biography</h3>
                <p>Once an unwilling host to the Aspect of War, Atreus <br /> survived when the celestial power within him was slain,<br /> refusing to succumb to a blow that tore stars from the<br /> heavens. In time, he learned to embrace the power of his<br /> own mortality, and the stubborn resilience that goes along<br /> with it. Atreus now opposes the divine as Pantheon reborn,<br /> his unbreakable will fueling the fallen Aspect's weapons on<br /> the field of battle</p>

            </div>
        </div>


      </div>
    </div>
  );
};

export default Biography;
