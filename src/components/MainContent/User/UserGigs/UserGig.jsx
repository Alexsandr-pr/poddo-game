
import "./user-gig.scss";
import image from "./img/minecraft.png"
import ButtonMain from "components/buttons/ButtonMain/ButtonMain";
import GameName from "components/GameName/GameName";

import micraftLogo from "assets/minecraft-logo.webp"
import Rating from "components/Rating/Rating";
import BlockRating from "components/BlockRating/BlockRating";
import UserReview from "components/UserReview/UserReview";


const data = [
    {
        title: "Responce time",
        rating: 4.9,
    },
    {
        title: "Friendliness",
        rating: 4.9,
    },
    {
        title: "Performance",
        rating: 4.9,
    },
    {
        title: "Satisfaction",
        rating: 4.9,
    }
]

const UserGig = () => {
    return (
        <div className="user-gig">
            <div className="user-gig__top gig-top">
                <div className="gig-top__image">
                    <img src={image} alt="" />
                </div>
                <div className="gig-top__body">
                    <div className="gig-top__name">
                        <GameName text={"Minecraft"} image={micraftLogo}/> 
                        <Rating rating={4.9}/>
                    </div>
                    <div className="gig-top__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni ad minim veniam.</div>
                    <div className="gig-top__sale">
                        <p className="gig-top__price">Starting at $20</p>
                        <ButtonMain text={"Order"}/>
                    </div>
                </div>
            </div>
            <div className="user-gig__count">
                <p className="user-gig__count-text">View count</p>
                <Rating rating={4.9}/>
            </div>
            <div className="user-gig__rating-items">
                {
                    data.map((item) => {
                        return (
                            <BlockRating {...item}/>
                        )
                    })
                }
            </div>
            <div className="user-gig__review-list">
                <UserReview/>
                <UserReview/>
                <UserReview/>
            </div>
        </div>
    )
}

export default UserGig