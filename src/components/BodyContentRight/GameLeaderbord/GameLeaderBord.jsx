import BlockTop from "../BlockTop/BlockTop"
import ParentBg from "../ParentBg/ParentBg"


const GameLeaderBord = () => {
    return (
        <ParentBg>
            <div className="game-leaderbord">
                <BlockTop title={"GAME  leaderboard"}>
                    <button className="text">See All</button>
                </BlockTop>
            </div>
        </ParentBg>
    )
}

export default GameLeaderBord