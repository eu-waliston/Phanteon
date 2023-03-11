import React from "react";
import "./Biography.css";

import blur_background from "../images/blur-fundo.png";
import background from "../images/background-2.png";

const Biography = () => {
  return (
    <>
      <div
        className="home"
        style={{ backgroundImage: `url(${blur_background})` }}
      >
        <div
          className="home__section"
          style={{ backgroundImage: `url(${background})` }}
        >
            
        </div>
      </div>
    </>
  );
};

export default Biography;
