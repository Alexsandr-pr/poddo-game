import BlockTop from "../BlockTop/BlockTop"
import ParentBg from "../ParentBg/ParentBg"


const Leaderbord = () => {
    return (
        <ParentBg>
            <div className="leaderbord">
                <BlockTop title={"Loot leaderboard"}>
                    <button className="text">See All</button>
                </BlockTop>
            </div>

        </ParentBg>
        
    )
}

export default Leaderbord