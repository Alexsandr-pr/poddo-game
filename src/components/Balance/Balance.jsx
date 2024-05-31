

import balance from "./img/balance.webp";
import "./balance.scss";

const Balance = () => {
    return (
        <div className="balance">
            <img src={balance} className="balance__image"/>
            <p className="balance__text">12,256</p>
        </div>
    )
}

export default Balance