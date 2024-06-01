

import ActivityFeed from "../ActivityFeed/ActivityFeed"
import GameLeaderBord from "../GameLeaderbord/GameLeaderBord"
import Leaderbord from "../Leaderbord/Leaderbord"
import LootLeaderBord from "../LootLeaderbord/LootLeaderBord"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import SuggestedForYou from "../SuggestedForYou/SuggestedForYou"
import LiveChat from "../LiveChat/LiveChat"
import "./body-content-right.scss"

const BodyContentRight = () => {
    return (
        <div className="body-content-right">
            <ProfileInfo/>
            <Leaderbord/>
            <SuggestedForYou/>
            <ActivityFeed/>
            <LootLeaderBord/>
            <GameLeaderBord/>
            <LiveChat/>
        </div>
    )
}

export default BodyContentRight