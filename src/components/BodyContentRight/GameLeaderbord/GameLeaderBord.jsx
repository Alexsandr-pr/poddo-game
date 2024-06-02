import UserItem from "components/UserItem/UserItem";
import BlockTop from "../BlockTop/BlockTop";
import ParentBg from "../ParentBg/ParentBg";



import image1 from "./img/01.webp"
import image2 from "./img/02.webp"
import image3 from "./img/03.webp"
import image4 from "./img/04.webp"
import image5 from "./img/05.webp"
import image6 from "./img/06.webp"
import image7 from "./img/07.webp"
import image8 from "./img/08.webp"
import image9 from "./img/09.webp"
import image10 from "./img/10.webp"

import "./game-leader-bord.scss"


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
    {
        name: "KillerX",
        image: image4,
        coinsBalance: '1,243',
    },
    {
        name: "Farza",
        image: image5,
        coinsBalance: '1,943',
    },
    {
        name: "Tzoo89",
        image: image6,
        coinsBalance: '1,643',
    },
    {
        name: "Tina Tris",
        image: image7,
        coinsBalance: '2,243',
    },
    {
        name: "PewPew",
        image: image8,
        coinsBalance: '4,243',
    },
    {
        name: "BigDaddy",
        image: image9,
        coinsBalance: '1,453',
    },
    {
        name: "CarlPop45",
        image: image10,
        coinsBalance: '1,543',
    },
]

const GameLeaderBord = () => {
    return (
        <ParentBg>
            <div className="game-leaderbord">
                <BlockTop title={"GAME  leaderboard"}>
                    <button className="text">See All</button>
                </BlockTop>
                <div className="game-leaderbord__list">
                    {
                        data.map((item, i) => {
                            return ( 
                                <UserItem key={i} {...item}>
                                    {
                                        item.textRight ? item.textRight : <div className="number-block">{i + 1}</div>
                                    }
                                    
                                    
                                </UserItem>
                            )
                        })
                    }
                </div>
            </div>
        </ParentBg>
    )
}

export default GameLeaderBord