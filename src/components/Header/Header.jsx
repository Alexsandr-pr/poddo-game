import HeaderInput from 'components/forms/HeaderInput/HeaderInput'
import React from 'react'

import userDefault from "./img/user-default.webp"
import BellIcon from 'components/icons/header-icon/BellIcon'
import MessageIcon from 'components/icons/header-icon/MessageIcon'


import "./header.scss"
const Header = () => {
    return (
        <header className='header'>
            <div className="header__search">
                <HeaderInput/>
            </div>
            <div className="header-block__buttons">
                <button className="header-block__button">
                    <span></span>
                    <BellIcon/>
                </button>
                <button className="header-block__button">
                    
                    <MessageIcon/>
                </button>
                <button className="header-block__button active">
                    <img src={userDefault} alt="user-default-image" />
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header