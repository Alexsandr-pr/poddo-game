import React from 'react'

import "./main-input.scss"

const MainInput = ({
    value,
    text,
    children,
    placeholder,
    type,
    setValue
}) => {
    return (
        <div className="main-input">
            <span className='main-input__text'>{text}</span>
            <label className='main-input__label'>
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder} 
                    className='main-input__input' 
                    type={type} />
                <div className='main-input__image'>
                    {children}
                </div>
            </label>
        </div>
        
    )
}

export default MainInput