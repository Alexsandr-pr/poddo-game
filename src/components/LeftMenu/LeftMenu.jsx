


import HomeIcon from "components/icons/icon-menu/HomeIcon"


import "./left-menu.scss";
import BagIcon from "components/icons/icon-menu/BagIcon";
import GameIcon from "components/icons/icon-menu/GameIcon";
import ChartIcon from "components/icons/icon-menu/ChartIcon";
import ActivityIcon from "components/icons/icon-menu/ActivityIcon";
import GmaerRulletteIcon from "components/icons/icon-menu/GmaerRulletteIcon";
import ProfileIcon from "components/icons/icon-menu/ProfileIcon";
import PetHouseIcon from "components/icons/icon-menu/PetHouseIcon";
import SettingsIcon from "components/icons/icon-menu/SettingsIcon";
import LogoutIcon from "components/icons/icon-menu/LogoutIcon";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";


const data = [
    {
        component: <HomeIcon/>,
        to: "/",
    },
    {
        component:  <GameIcon/>,
        to: "altersky",
    },
    {
        component:<BagIcon/>,
        to: "bunpal",
    },
    {
        component: <ChartIcon/>,
        to: "chart",
    },
    {
        component: <ActivityIcon/>,
        to: "",
    },
    {
        component: <GmaerRulletteIcon/>,
        to: "",
    },
    {
        component: <ProfileIcon/>,
        to: "user",
    },
    {
        component: <PetHouseIcon/>,
        to: "",
    },
    {
        component: <SettingsIcon/>,
        to: "",
    },
    {
        component: <LogoutIcon/>,
        to: "",
    },
]


const LeftMenu = ({number}) => {
    
    const [state, setState] = useState(0);

    const refIndicator = useRef()

    const onChangeActivePosition = () => {
        const element = refIndicator.current;
        element.style.cssText = `
            top:${(65 * state) + 20}px;
        `
    }

    useEffect(() => {
        onChangeActivePosition()
    }, [state]);

    return (
        <div style={{left: number + "px"}} className={`left-menu`}>
            <div className="left-menu__logo">
                <a href="" className="">LOGO</a>
            </div>
            <nav className="left-menu__navbar">
                <ul className="left-menu__list">
                    <li ref={refIndicator} className="indicator">
                        <div className="menu__indicator-1"></div>
                        <div className="menu__indicator-2"></div>
                        <div className="menu__indicator-3"></div>
                        <div className="menu__indicator-4"></div>
                        <div className="menu__indicator-5"></div>
                    </li>
                    {
                        data.map(({component, to}, i) => {
                            return (
                                <li key={i} className="left-menu__item">
                                    <NavLink className={`left-menu__link`} onClick={() => setState(i)} to={to}>
                                        {component}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default LeftMenu;