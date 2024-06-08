import UserItem from "components/UserItem/UserItem";
import BlockTop from "../BlockTop/BlockTop"
import ParentBg from "../ParentBg/ParentBg"


import "./loot.scss";


import image1 from "./img/01.webp";
import image2 from "./img/02.webp";
import image3 from "./img/03.webp";

const data = [
    {
        name: "Dzika",
        image: image1,
        coinsBalance: '1,596',
        textRight: "🥇"
    },
    {
        name: "NoobPlayer69",
        image: image2,
        coinsBalance: '1,396',
        textRight: "🥈"
    },
    {
        name: "Mrs Jam",
        image: image3,
        coinsBalance: '1,200',
        textRight: "🥉"
    },
]

const LootLeaderBord = () => {
    return (
        <ParentBg>
            <div className="loot-leaderbord">
                <BlockTop title={"Loot leaderboard"}>
                    <button className="text text-button">See All</button>
                </BlockTop>
                <div className="loot-leaderbord__list">
                    {
                        data.map((item, i) => {
                            return ( 
                                <UserItem key={i} {...item}>
                                    {item.textRight}
                                </UserItem>
                            )
                        })
                    }
                </div>
            </div>
        </ParentBg>
    )
}

export default LootLeaderBord