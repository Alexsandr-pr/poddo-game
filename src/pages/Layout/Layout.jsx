import Header from 'components/Header/Header'
import LeftMenu from 'components/LeftMenu/LeftMenu'
import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import "./layout.scss"
import BodyContentRight from 'components/BodyContentRight/BodyContentRight/BodyContentRight'
import SwipeMenu from 'components/icons/com'

const Layout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuRight, setMenuRight] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
   // const [swipeDistance, setSwipeDistance] = useState(0);


    
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
        // const currentX = e.targetTouches[0].clientX;
        // const distance = currentX - touchStartX.current;
        // setSwipeDistance(distance);
        // console.log(distance)

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
            // Свайп вправо
            if(menuRight) {
                setMenuRight(false);
            } else {
                setMenuOpen(true);
            }
        }
        
    };


    return (
        <div
            className='body'>
            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`body__left ${menuOpen ? "active" : ""}`}>
                    <LeftMenu />
            </div>
            <div className="body__right">
                <Header/>
                <div
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
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