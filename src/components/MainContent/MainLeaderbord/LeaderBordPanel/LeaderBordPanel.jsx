

import MainBlockTop from "components/MainContent/MainBlockTop/MainBlockTop";
import "./leaderbord-panel.scss";
import ButtonPoints from "components/buttons/ButtonPoints/ButtonPoints";
import Quest from "components/Quest/Quest";


const LeaderBordPanel = () => {
    return (
        <div className="leaderbord-main-panel">
            <div className="leaderbord-main-bottom">
                <MainBlockTop title={"Leaderboard"}>
                    <ButtonPoints/>
                </MainBlockTop>
            </div>
            <Quest/>
        </div>
    )
}

export default LeaderBordPanel