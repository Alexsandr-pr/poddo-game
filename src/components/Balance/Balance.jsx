

import balance from "./img/balance.webp";
import "./balance.scss";
import useNumberAnimation from "hooks/useNumberAnimation";

const Balance = ({number}) => {
    const targetCount = parseInt(number); // Получить число из текста
    const count = useNumberAnimation(targetCount, 500); 

    return (
        <div className="balance">
            <img src={balance} className="balance__image"/>
            <p className="balance__text">{count}</p>
        </div>
    )
}

export default Balance