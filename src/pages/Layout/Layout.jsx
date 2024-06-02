import Header from 'components/Header/Header'
import LeftMenu from 'components/LeftMenu/LeftMenu'
import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import "./layout.scss"
import BodyContentRight from 'components/BodyContentRight/BodyContentRight/BodyContentRight'
import SwipeMenu from 'components/icons/com'

const Layout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // Свайп влево
            console.log("Свайп влево")
            setMenuOpen(false);
        }

        if (touchEndX.current - touchStartX.current > 50) {
            // Свайп вправо
            console.log("Свайп вправо")
            setMenuOpen(true);
        }
        
    };


    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className='body'>
            <div className={`body__left ${menuOpen ? "active" : null}`}>
                <LeftMenu />
            </div>
            <div className="body__right">
                <Header/>
                <div className="body__content body-content">
                    <main className="body-content__main">
                        <Outlet/>
                    </main>
                    <aside className="body-content__right">
                        <BodyContentRight/>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Layout