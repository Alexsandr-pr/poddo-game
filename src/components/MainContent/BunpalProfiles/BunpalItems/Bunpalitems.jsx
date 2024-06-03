

import Rating from "components/Rating/Rating";

import game1 from "./game/01.webp";
import game2 from "./game/02.webp";
import game3 from "./game/03.webp";
import game4 from "./game/04.webp";
import game5 from "./game/05.webp";
import game6 from "./game/06.webp";
import pet from "./img/pet.webp";

import user1 from "components/BodyContentRight/GameLeaderbord/img/01.webp";
import user2 from "components/BodyContentRight/GameLeaderbord/img/02.webp";
import user3 from "components/BodyContentRight/GameLeaderbord/img/03.webp";
import user4 from "components/BodyContentRight/GameLeaderbord/img/04.webp";
import user5 from "components/BodyContentRight/GameLeaderbord/img/05.webp";
import user6 from "components/BodyContentRight/GameLeaderbord/img/06.webp";


import "./bunpal-items.scss"

const data = [
    {
        imageGame: game1,
        userName:"Edwerd Evans",
        userAvatar: user1,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
    {
        imageGame: game2,
        userName:"Ted Stinson",
        userAvatar: user2,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
    {
        imageGame: game3,
        userName:"Lily Aldrian",
        userAvatar: user3,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
    {
        imageGame: game4,
        userName:"Edwerd Evans",
        userAvatar: user4,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
    {
        imageGame: game5,
        userName:"Ted Stinson",
        userAvatar: user5,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
    {
        imageGame: game6,
        userName:"Lily Aldrian",
        userAvatar: user6,
        userPet: pet ,
        level:"2",
        rating:"4.9",
        price:"Starting at $20",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. "
    },
]

const Bunpalitems = () => {
    return (
        <div className="bunpal-items">
            {
                data.map(item => {
                    return (
                        <BunpalItem  {...item}/>
                    )
                })
            }
        </div>
    )
}


const BunpalItem = ({
    imageGame,
    userName,
    userAvatar,
    userPet,
    level,
    rating,
    price,
    text
}) => {
    return (
        <div className="bunpal-item">
            <div className="bunpal-item__image bunpal-image">
                <div className="bunpal-image__image">
                    <img src={imageGame} alt="" />
                </div>
                <div className="bunpal-image__person image-person-bunpal">
                    <div className="image-person-bunpal__image">
                        <img src={userAvatar} alt="" />
                    </div>
                    <img src={userPet} alt="" className="image-person-bunpal__pet" />
                </div>
            </div>
            <div className="bunpal-item__body">
                <div className="bunpal-item__name">{userName}</div>
                <div className="bunpal-item__level">Level {level}</div>
                <div className="bunpal-item__text">{text}</div>
                <div className="bunpal-item__review bunpal-review">
                    <div className="bunpal-review__text">
                        {price}
                    </div>
                    <div className="bunpal-review__rating">
                        <Rating rating={rating}/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Bunpalitems