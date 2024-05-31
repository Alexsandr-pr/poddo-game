
import BlockTop from "../BlockTop/BlockTop";
import ParentBg from "../ParentBg/ParentBg";
import "./activity-feed.scss";


const ActivityFeed = () => {
    return (
        <ParentBg>
            <div className="activity-feed">
                <BlockTop title={"ACTIVITY FEED"}/>
            </div>
        </ParentBg>
        
    )
}

export default ActivityFeed