

import balance from "assets/icon/balance.webp"
import "./button-give.scss";

const ButtonGive = () => {
    return (
        <button className="button-give">
            <img width={21} height={21} src={balance} alt="" />
            <span>Give tips</span>
        </button>
    )
}

export default ButtonGive