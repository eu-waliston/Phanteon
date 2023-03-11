import React from "react";
import "./Home.css"

import blur_background from "../images/blur-fundo.png";
import background from "../images/background-2.png";


//Components
import Navbar from "../Nav/Navbar";

//Skills
import Passiva from "../Skills/Passiva";
import Q from "../Skills/Q";
import W from "../Skills/W";
import E from "../Skills/E";
import R from "../Skills/R";

//Skills Info
import PassivaInfo from "../skillsInfo/PassivaInfo";
import QInfo from "../skillsInfo/QInfo";
import WInfo from "../skillsInfo/WInfo";
import EInfo from "../skillsInfo/EInfo";
import RInfo from "../skillsInfo/RInfo";



const Home = () => {

    const [skills1, setSkills1] = React.useState(false);
    const [skills2, setSkills2] = React.useState(false);
    const [skills3, setSkills3] = React.useState(false);
    const [skills4, setSkills4] = React.useState(false);
    const [skills5, setSkills5] = React.useState(false);

    const hangleClick1 = () => {
        setSkills1(!skills1)
    }

    const hangleClick2 = () => {
        setSkills2(!skills2)
    }

    const hangleClick3 = () => {
        setSkills3(!skills3)
    }

    const hangleClick4 = () => {
        setSkills4(!skills4)
    }

    const hangleClick5 = () => {
        setSkills5(!skills5)
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
                    {skills1 ? <Passiva /> : ""}
                    {skills2 ? <Q /> : ""}
                    {skills3 ? <W /> : ""}
                    {skills4 ? <E /> : ""}
                    {skills5 ? <R /> : ""}
                </div>

                <div className="habilities__section">

                    <h1>ABILITIES</h1>

                    <div className="hability">

                        <div className="phanteon-passie" onClick={() => hangleClick1()}>
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/passive/Pantheon_Passive.png" alt="Pantheon_Passive" className={skills1 ? "skill__border" : ""} />

                        </div>
                        <div className="phanteon-q" onClick={() => hangleClick2()}>
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonQ.png" alt="PantheonQ" className={skills2 ? "skill__border2" : ""} />

                        </div>
                        <div className="phanteon-w" onClick={() => hangleClick3()}>
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonW.png" alt="PantheonW" className={skills3 ? "skill__border3" : ""} />

                        </div>
                        <div className="phanteon-e" onClick={() => hangleClick4()} >
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonE.png" alt="PantheonE" className={skills4 ? "skill__border4" : ""} />

                        </div>
                        <div className="phanteon-r" onClick={() => hangleClick5()}>
                            <img src="https://ddragon.leagueoflegends.com/cdn/13.4.1/img/spell/PantheonR.png" alt="antheonR" className={skills5 ? "skill__border5" : ""} />

                        </div>
                    </div>
                    <div className="skills__info">
                        {skills1 ? <PassivaInfo /> : ""}
                        {skills2 ? <QInfo /> : ""}
                        {skills3 ? <WInfo /> : ""}
                        {skills4 ? <EInfo /> : ""}
                        {skills5 ? <RInfo /> : ""}
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Home;