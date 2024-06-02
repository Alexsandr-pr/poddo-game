
import UserItem from "components/UserItem/UserItem";
import BlockTop from "../BlockTop/BlockTop";
import ParentBg from "../ParentBg/ParentBg";
import "./syggested-for.scss";

import image1 from "./img/01.webp"
import image2 from "./img/02.webp"
import image3 from "./img/03.webp"
import ButtonMain from "components/buttons/ButtonMain/ButtonMain";

const data = [
    {
        name: "Faraz Tariq",
        image: image1,
        text: "Super Active",
    },
    {
        name: "Tina Tzoo",
        image: image2,
        text: "Super Active",
    },
    {
        name: "MKBHD",
        image: image3,
        text: "Super Active",
    },
]

const SuggestedForYou = () => {
    return (
        <ParentBg>
            <div className="suggested-for">
                <BlockTop title={"SUGGESTED FOR YOU"}>
                    <button className="text">See All</button>
                </BlockTop>
                <div className="suggested-for__list">
                    {
                        data.map((item, i) => {
                            return (
                                <UserItem key={i} {...item} >
                                    <ButtonMain text={"Follow"}/>
                                </UserItem>
                            )
                        })
                    }
                </div>
            </div>
        </ParentBg>
    )
}

export default SuggestedForYou