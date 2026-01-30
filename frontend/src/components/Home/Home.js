import React from "react";
import "./Home.css"

import blur_background from "../images/blur-fundo.png";
import background from "../images/background-2.png";

// Components
import Navbar from "../Nav/Navbar";

// Skills
import Passiva from "../Skills/Passiva";
import Q from "../Skills/Q";
import W from "../Skills/W";
import E from "../Skills/E";
import R from "../Skills/R";

// Skills Info
import PassivaInfo from "../skillsInfo/PassivaInfo";
import QInfo from "../skillsInfo/QInfo";
import WInfo from "../skillsInfo/WInfo";
import EInfo from "../skillsInfo/EInfo";
import RInfo from "../skillsInfo/RInfo";

const Home = () => {
    // Estado único para controlar qual skill está ativa
    const [activeSkill, setActiveSkill] = React.useState(null);

    const handleSkillClick = (skillNumber) => {
        // Se clicar na mesma skill, fecha (toggle)
        // Se clicar em outra, troca para a nova
        setActiveSkill(activeSkill === skillNumber ? null : skillNumber);
    }

    return (
        <div className="home" style={{ backgroundImage: `url(${blur_background})` }}>

            <div className="home__section" style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <div className="info__section">
                    <h1>PANTHEON</h1>
                    <p>THE UNBREAKABLE SPEAR</p>
                </div>

                <hr />
                <div className="suqare__skills__videos">
                    {activeSkill === 1 && <Passiva />}
                    {activeSkill === 2 && <Q />}
                    {activeSkill === 3 && <W />}
                    {activeSkill === 4 && <E />}
                    {activeSkill === 5 && <R />}
                </div>

                <div className="habilities__section">

                    <h1>ABILITIES</h1>

                    <div className="hability">
                        <div className="phanteon-passie" onClick={() => handleSkillClick(1)}>
                            <img
                                src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/passive/Pantheon_Passive.png"
                                alt="Pantheon_Passive"
                                className={activeSkill === 1 ? "skill__border" : ""}
                            />
                        </div>
                        <div className="phanteon-q" onClick={() => handleSkillClick(2)}>
                            <img
                                src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonQ.png"
                                alt="PantheonQ"
                                className={activeSkill === 2 ? "skill__border2" : ""}
                            />
                        </div>
                        <div className="phanteon-w" onClick={() => handleSkillClick(3)}>
                            <img
                                src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonW.png"
                                alt="PantheonW"
                                className={activeSkill === 3 ? "skill__border3" : ""}
                            />
                        </div>
                        <div className="phanteon-e" onClick={() => handleSkillClick(4)}>
                            <img
                                src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonE.png"
                                alt="PantheonE"
                                className={activeSkill === 4 ? "skill__border4" : ""}
                            />
                        </div>
                        <div className="phanteon-r" onClick={() => handleSkillClick(5)}>
                            <img
                                src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonR.png"
                                alt="PantheonR"
                                className={activeSkill === 5 ? "skill__border5" : ""}
                            />
                        </div>
                    </div>

                    <div className="skills__info">
                        {activeSkill === 1 && <PassivaInfo />}
                        {activeSkill === 2 && <QInfo />}
                        {activeSkill === 3 && <WInfo />}
                        {activeSkill === 4 && <EInfo />}
                        {activeSkill === 5 && <RInfo />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;