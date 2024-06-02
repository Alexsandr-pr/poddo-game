

import balanse from "assets/icon/balance.webp";
import fon from "./img/csgo.webp";
import image from "./img/image.png";
import person from "./img/persona.webp"
import image1 from "./img/character/01.png";
import image2 from "./img/character/02.png"
import image3 from "./img/character/03.png"
import "./altersky.scss";



import BlockTop from "components/BodyContentRight/BlockTop/BlockTop";
import ButtonViolet from "components/buttons/ButtonViolet/ButtonViolet";
import ButtonVioletBg from "components/buttons/ButtonVioletBg/ButtonVioletBg";
import InputChat from "components/forms/InputChat/InputChat";
import ButtonMain from "components/buttons/ButtonMain/ButtonMain";

const Altersky = () => {
    return (
        <div className="altersky">
            <div className="altersky-top">
                <img src={fon} className="altersky-top__image"/>
                <div className="altersky-top__title">
                    <img width={36} height={36} src={balanse} alt="" />
                    <h1>AlterSky</h1>
                </div>
                <div className="altersky-top__text">Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.and very customize  continually.</div>
            </div>
            <div className="altersky-bottom">
                <div className="altersky-bottom__left ">
                    <div className="altersky-mood">
                        <BlockTop title={"PARTY MOOD"}/>
                        <div className="altersky-mood__text">Lorem ipsum dolor sit amet, consect etur adipiscing elit iqua. </div>
                        <div className="altersky-mood__buttons">
                            <ButtonVioletBg text={"Create"}/>
                            <ButtonViolet text={"Join"}/>
                        </div>
                    </div>
                    <div className="altersky-character">
                        <BlockTop title={"CHARACTER"}/>
                        <div className="altersky-character__person altersky-person">
                            <div className="altersky-person__image">
                                <img src={person} alt="" />
                            </div>
                            <div className="altersky-person__list">
                                <div className="altersky-person__list-image">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="altersky-person__list-image">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="altersky-person__list-image">
                                    <img src={image3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="altersky-bottom__right">
                    <InputChat placeholder={"Nickname"}>
                        <ButtonMain text={"Play"}/>
                    </InputChat>
                    <div className="altersky-bottom__image altersky-image">
                        <img  src={image} alt="image" />
                        <div className="altersky-image__body">
                            <h3 className="altersky-image__title">Space Game Mode</h3>
                            <p className="altersky-image__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Altersky