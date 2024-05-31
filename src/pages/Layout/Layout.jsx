import Header from 'components/Header/Header'
import LeftMenu from 'components/LeftMenu/LeftMenu'
import React from 'react'
import { Outlet } from 'react-router-dom'

import "./layout.scss"
import BodyContentRight from 'components/BodyContentRight/BodyContentRight/BodyContentRight'

const Layout = () => {
    return (
        <div className='body'>
            <div className="body__left">
                <LeftMenu/>
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