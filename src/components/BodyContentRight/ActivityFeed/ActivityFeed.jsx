
import UserItem from "components/UserItem/UserItem";
import BlockTop from "../BlockTop/BlockTop";
import ParentBg from "../ParentBg/ParentBg";
import "./activity-feed.scss";

import image1 from "./img/01.webp"
import image2 from "./img/02.webp"
import image3 from "./img/03.webp"
import image4 from "./img/04.webp"
import defaultImage from "./img/defaultImage.webp"


const data = [
    {
        name: "Mr. Jam  moved up on the Fishing Planet leaderboard",
        image: image1,
    },
    {
        name: "You have being invited Team Bears!",
        image: defaultImage,
        text: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit.",
    },
    {
        name: "Nozzy  moved up on the Fishing Planet leaderboard",
        image: image2,
    },
    {
        name: "BigDaddy  moved up on the World of Leage leaderboard",
        image: image3,
    },
    {
        name: "You have being invited Champ404!",
        image: defaultImage,
        text: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit.",
    },
    {
        name: "Noob69  moved up on the Bears leaderboard",
        image: image4,
    }
]



const ActivityFeed = () => {
    return (
        <ParentBg>
            <div className="activity-feed">
                <BlockTop title={"ACTIVITY FEED"}/>
                <div className="suggested-for__list">
                    {
                        data.map((item, i) => {
                            return (
                                <UserItem key={i} {...item}>
                                    <p>7m ago</p>
                                </UserItem>
                            )
                        })
                    }
                    
                </div>
            </div>
        </ParentBg>
        
    )
}

export default ActivityFeed