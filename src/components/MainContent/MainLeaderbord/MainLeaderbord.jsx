import LeaderBordPanel from "./LeaderBordPanel/LeaderBordPanel"


import image1 from "./img/maincraft.webp";
import image2 from "./img/pubg.webp";
import image3 from "./img/fortnite.webp";
import image4 from "./img/cs.webp";
import image5 from "./img/valorant.webp";
import image6 from "./img/fortnite-primal.webp";
import image7 from "./img/pig.webp";
import image8 from "./img/robots.webp";
import image9 from "./img/company.webp"



import "./main-leaderbord.scss";

const data = [
    {
        image: image1,
        name:"Minecraft",
        text:"2,356 "
    },
    {
        image: image2,
        name:"PUBG",
        text:"12,356"
    },
    {
        image: image3,
        name:"Fortnite",
        text:"25,263"
    },
    {
        image: image4,
        name:"CS:GO",
        text:"25,263"
    },
    {
        image: image5,
        name:"Valorant",
        text:"16,356"
    },
    {
        image: image6,
        name:"Fortnite (primal)",
        text:"55,263"
    },
    {
        image: image7,
        name:"Minecraft",
        text:"34,657"
    },
    {
        image: image8,
        name:"Fortnite (primal)",
        text:"33,666"
    },
    {
        image: image9,
        name:"Valorant",
        text:"4,4545"
    },
    {
        image: image1,
        name:"Minecraft",
        text:"2,356 "
    },
    {
        image: image2,
        name:"PUBG",
        text:"12,356"
    },
    {
        image: image3,
        name:"Fortnite",
        text:"25,263"
    },
    {
        image: image4,
        name:"CS:GO",
        text:"25,263"
    },
    {
        image: image5,
        name:"Valorant",
        text:"16,356"
    },
    {
        image: image6,
        name:"Fortnite (primal)",
        text:"55,263"
    },
    {
        image: image7,
        name:"Minecraft",
        text:"34,657"
    },
    {
        image: image8,
        name:"Fortnite (primal)",
        text:"33,666"
    },
    {
        image: image9,
        name:"Valorant",
        text:"4,4545"
    }
]


const MainLeaderbord = () => {
    return (
        <div className="main-leaderbord">
            <LeaderBordPanel/>
            <div className="leaderbord__items">
                {
                    data.map((item, i) => {
                        return (
                            <LeaderbordItem key={i} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}



const LeaderbordItem = ({
    image,
    name,
    text
}) => {
    return (
        <div className="leaderbord-item">
                <div className="leaderbord-item__image">
                    <img src={image} alt="" />
                </div>
                <div className="leaderbord-item__body">
                    <div className="leaderbord-item__name">{name}</div>
                    <div className="leaderbord-item__bottom">
                        <div className="leaderbord-item__ranked">
                        <p>🎖️</p><p>{text}</p>
                        </div>
                        <div className="leaderbord-item__text">Users Ranked</div>
                    </div>
                </div>
            </div>
    )
}
export default MainLeaderbord