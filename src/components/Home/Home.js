import React from "react";
import "./Home.css"

import blur_background from "../images/blur-fundo.png";
import background from "../images/background-2.png";

/*
    <button className={changeText ? "btn_fs active" : "btn_fs"} onClick={() => handleChange()}>
        img src={require("../images/btn_tailer_1.jpg")} alt="logo" className="image_btn1" />
    </button>

    {changeText ? <Trailer1 /> : <Trailer2 />}
*/

const Home = () => {

    const [skillVideo, setSkillVideo] = React.useState(true);

    const handleChange = () => {
        return setSkillVideo(!skillVideo);
    }

    return (
        <div className="home" style={{ backgroundImage: `url(${blur_background})` }}>

            <div className="home__section" style={{ backgroundImage: `url(${background})` }}>
                <div className="nav">
                    <div className="logo__section">
                        <img src={require("../images/LOL-icon.png")} alt="logo" className="logo" />
                    </div>

                    <div className="navbar__section">
                        <ul className="navbar">
                            <li className="nav-itens" >home</li>
                            <li className="nav-itens" >biography</li>
                            <li className="nav-itens" >skins</li>
                            <li className="nav-itens" >base statistics</li>
                        </ul>
                    </div>
                    <div className="price__section">
                        <h2 id="t1"><img className="logo2" src={require("../images/BE_icon.webp")} alt="icon" /> 3150</h2>
                        <h1>/</h1>
                        <h2 id="t2"><img className="logo2" src={require("../images/RP_icon.png")} alt="icon" />  790</h2>

                    </div>
                </div>


                <div className="info__section">
                    <h1>PANTHEON</h1>
                    <p>THE UNBREAKABLE SPEAR</p>
                </div>

                <hr />
                <div className="suqare__skills__videos"></div>

                <div className="habilities__section">

                    <h1>ABILITIES</h1>
                    <div className="hability">
                        <div className="phanteon-passie">
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/passive/Pantheon_Passive.png" alt="Pantheon_Passive" />

                        </div>
                        <div className="phanteon-q" >
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonQ.png" alt="PantheonQ" />

                        </div>
                        <div className="phanteon-w" >
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonW.png" alt="PantheonW" />

                        </div>
                        <div className="phanteon-e"  >
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonE.png" alt="PantheonE" />

                        </div>
                        <div className="phanteon-r"  >
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonR.png" alt="antheonR" />

                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Home;