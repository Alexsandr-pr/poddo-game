import Header from 'components/Header/Header'
import LeftMenu from 'components/LeftMenu/LeftMenu'
import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import "./layout.scss"
import BodyContentRight from 'components/BodyContentRight/BodyContentRight/BodyContentRight'

import useMediaQuery from 'hooks/useMediaQuery'
import ButtonMobile from 'components/LeftMenu/ButtonMobile/ButtonMobile'
import { useSelector } from 'react-redux'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import BlockFon from 'components/BlockFon/BlockFon'
import Auth from 'pages/Auth/Auth'

const Layout = () => {

    const [menuRight, setMenuRight] = useState(false);
    const query = useMediaQuery('(max-width:767.98px)');
    const {mobileMenu} = useSelector(store => store.menu);

    const [block] = useAutoAnimate();

    const isAuth = false;

    if(!isAuth) {
        return (
            <div className="body">
                <Auth/>
            </div>
        )
    }

    return (

        <div className='body'>
            <BlockFon/>
            <div
                className={`body__left ${mobileMenu ? "active" : ""}`}>
                    <LeftMenu />
            </div>
            <div className="body__right">
                <Header/>
                <div
                    className="body__content body-content">
                    <main ref={block} className="body-content__main">
                        <Outlet/>
                    </main>
                    <aside className={`body-content__right ${menuRight ? "active" : ""}`}>
                        <BodyContentRight/>
                    </aside>
                </div>
            </div>
            {query && <ButtonMobile/>}
        </div>
    )
}

export default Layout