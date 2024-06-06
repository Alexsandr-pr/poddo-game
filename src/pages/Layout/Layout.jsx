import Header from 'components/Header/Header'
import LeftMenu from 'components/LeftMenu/LeftMenu'
import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import "./layout.scss"
import BodyContentRight from 'components/BodyContentRight/BodyContentRight/BodyContentRight'


const Layout = () => {

    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuRight, setMenuRight] = useState(false);
    /*
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {

        if (touchStartX.current - touchEndX.current > 100) {
            if(menuOpen) {
                setMenuOpen(false);
            } else {
                setMenuRight(true);
            }
            
        }
        if (touchEndX.current - touchStartX.current > 100) {
            if(menuRight) {
                setMenuRight(false);
            } else {
                setMenuOpen(true);
            }
        }
        
    };
    */

    useEffect(() => {
        setMenuOpen(false);
    }, [location])

    return (
        <div
            className='body'>
            <div
                className={`body__left ${menuOpen ? "active" : ""}`}>
                    <LeftMenu />
            </div>
            <div className="body__right">
                <Header/>
                <div
                    className="body__content body-content">
                    <main className="body-content__main">
                        <Outlet/>
                    </main>
                    <aside className={`body-content__right ${menuRight ? "active" : ""}`}>
                        <BodyContentRight/>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Layout