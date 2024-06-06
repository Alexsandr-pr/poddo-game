


import "./menu-mobile.scss";
import BagIcon from "components/icons/icon-menu/BagIcon";
import GameIcon from "components/icons/icon-menu/GameIcon";
import ChartIcon from "components/icons/icon-menu/ChartIcon";
import ActivityIcon from "components/icons/icon-menu/ActivityIcon";
import GmaerRulletteIcon from "components/icons/icon-menu/GmaerRulletteIcon";
import ProfileIcon from "components/icons/icon-menu/ProfileIcon";
import PetHouseIcon from "components/icons/icon-menu/PetHouseIcon";
import SettingsIcon from "components/icons/icon-menu/SettingsIcon";
import LogoutIcon from "components/icons/icon-menu/LogoutIcon";
import HomeIcon from "components/icons/icon-menu/HomeIcon"
import { NavLink } from "react-router-dom";
import { useRef } from "react";
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
        to: "pet",
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


const MenuMobile = () => {
    const refIndicator = useRef();

    return (
        <div className="menu-mobile">
            <ul className="menu-mobile__list">
                    <li ref={refIndicator} className="indicator-mobile">
                        <div className="mobile-menu__indicator-1"></div>
                        <div className="mobile-menu__indicator-2"></div>
                        <div className="mobile-menu__indicator-3"></div>
                        <div className="mobile-menu__indicator-4"></div>
                        <div className="mobile-menu__indicator-5"></div>
                    </li>
                {
                    data.map(({component, to}) => {
                        return (
                            <li className="menu-mobile__item">
                                <NavLink to={to} className={`menu-mobile__link`}>
                                    {component}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MenuMobile