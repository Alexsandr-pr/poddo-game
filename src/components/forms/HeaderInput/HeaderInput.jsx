
import "./header-input.scss"

import search from "assets/icon/search-input.webp"

const HeaderInput = () => {
    return (
        <label className="header__label" htmlFor="header-input">
            <img src={search} alt="search" />
            <input id="header-input" className="header__input" placeholder="Search"/>
        </label>
        
    )
}

export default HeaderInput;