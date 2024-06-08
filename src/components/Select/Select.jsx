import { useState } from "react"
import "./select.scss"
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Select = ({data}) => {
    const [show, setShow] = useState(false);
    const [block] = useAutoAnimate()

    return (
        <div ref={block} className="select__body">
            <button onClick={() => setShow(prev => !prev)} className="select__button">
                GamePal
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0.184696 1.07019C0.40857 0.84632 0.758896 0.825968 1.00576 1.00914L1.07649 1.07019L6.51611 6.50953L11.9557 1.07019C12.1796 0.84632 12.5299 0.825967 12.7768 1.00914L12.8475 1.07019C13.0714 1.29407 13.0918 1.64439 12.9086 1.89126L12.8475 1.96198L6.96201 7.84751C6.73813 8.07138 6.38781 8.09173 6.14094 7.90856L6.07022 7.84751L0.184696 1.96199C-0.0615653 1.71572 -0.0615653 1.31646 0.184696 1.07019Z" fill="white"/>
                </svg>
            </button>
            {
                show && <div className="select__content">
                            <button className="select-button__content">content</button>
                            <button className="select-button__content">content</button>
                            <button className="select-button__content">content</button>
                            <button className="select-button__content">content</button>
                        </div>
            }
        </div>
    )
}

export default Select