

import ButtonGrey from "components/buttons/ButtonGrey/ButtonGrey";
import "./quest.scss";
import balance from "assets/icon/balance.webp"

const Quest = () => {
    return (
        <div className="quest">
            <div className="quest__top">
                <h2 className="quest__title">⚔️ Quest #141</h2>
                <div className="quest__label">
                    <img src={balance} alt="" />
                    <p>20</p>
                </div>
            </div>
            <div className="quest__bottom quest-bottom">
                <div className="quest-bottom__body">
                    <div className="quest-bottom__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. </div>
                    <div className="quest-bottom__range quest-range">
                        <div className="quest-range__indicator"></div>  
                    </div>
                </div>
                <div className="quest-bottom__button">
                    <ButtonGrey text={"Claim"}/>
                </div>
            </div>
        </div>
    )
}

export default Quest