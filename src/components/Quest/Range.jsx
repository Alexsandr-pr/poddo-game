

import { useEffect, useRef, useState } from "react";
import "./quest.scss";

const Range = ({ widthPercentage }) => {

    const [showText, setShowText] = useState(false);
    const indicatorRef = useRef(null);

    useEffect(() => {
        const indicator = indicatorRef.current;
        indicator.style.width = '0%'; 
        setTimeout(() => {
            indicator.style.width = `${widthPercentage}%`; 
        }, 100); 
        const timer = setTimeout(() => {
            setShowText(true);
        }, 1600); 

        return () => clearTimeout(timer);
    }, [widthPercentage]);
    return (
        <div   className="quest-range-2">
            <div ref={indicatorRef} className="quest-range__indicator-2">
                <p> {showText && `${widthPercentage}%`}</p>
            </div>  
        </div>
    )
}

export default Range