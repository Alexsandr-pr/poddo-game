


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
import { NavLink, useLocation } from "react-router-dom";
import ButtonClose from "./ButtonMobile/ButtonClose";
import { useDispatch } from "react-redux";
import { onActiveModal } from "store/menuSlise";
import useMediaQuery from "hooks/useMediaQuery";



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
        to: "/activity",
    },
    {
        component: <GmaerRulletteIcon/>,
        to: "/game",
    },
    {
        component: <ProfileIcon/>,
        to: "/user",
    },
    {
        component: <PetHouseIcon/>,
        to: "/pet",
    },
    {
        component: <SettingsIcon/>,
        to: "/settings",
    },
    {
        component: <LogoutIcon/>,
        to: "/logout",
    },
]


const LeftMenu = ({number}) => {
    
    const [state, setState] = useState(0);
    const query = useMediaQuery('(max-width:767.98px)');
    const refIndicator = useRef();
    const refMenu = useRef();

    const onChangeActivePosition = () => {
        const element = refIndicator.current;
        element.style.cssText = `
            top:${(65 * state) + 20}px;
        `
    }
    const onChangeState =  () => {
        const elements =  refMenu.current;
        const array = elements.querySelectorAll(".left-menu__link");

        array.forEach((item, i) => {
            if(item.classList.contains("active")) {
                setState(i)
            }
        })
    }

    useEffect(() => {
        onChangeActivePosition()
    }, [state]);

    useEffect(() => {
        onChangeState();
    }, []);

    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onActiveModal(false))
    }, [location])

    return (
        <div style={{left: number + "px"}} className={`left-menu`}>
            <div className="left-menu__logo">
                <a href="" className="">LOGO</a>
            </div>
            <nav className="left-menu__navbar">
                <ul ref={refMenu} className="left-menu__list">
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
                                    <NavLink className={`left-menu__link`} onClick={() =>  setState(i)} to={to}>
                                        {component}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
                {
                    query && <ButtonClose/>
                }
        </div>
    )
}

export default LeftMenu;