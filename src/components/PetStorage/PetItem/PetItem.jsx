
import Range from "components/Quest/Range";
import "./pet-item.scss";
import Health from "components/Health/Health";

const PetItem = ({
    image,
    name,
    nick
}) => {
    return (
        <div className="pet-item">
            <div className="pet-item__image">
                <img src={image} alt="" />
            </div>

            <div >
                <h3 className="pet-item__name">{name}</h3>
                <p className="pet-item__nick">{nick}</p>
            </div>

            <ul className="pet-item__list">
                <li className="pet-item__list-item pet-list-item">
                    <div className="pet-list-item__text">Class</div>
                    <div className="pet-list-item__label">Basic</div>
                </li>
                <li className="pet-item__list-item pet-list-item">
                    <div className="pet-list-item__text">Level</div>
                    <div className="pet-list-item__label">Level 01</div>
                </li>
                <li className="pet-item__list-item pet-list-item">
                    <div className="pet-list-item__text">Compared with</div>
                    <div className="pet-list-item__label">Any</div>
                </li>
            </ul>

            <div className="pet-item__block">
                <div className="pet-item__block-title">
                Health
                </div>
                <div className="pet-item__block-content">
                    <Health/>
                </div>
            </div>

            <div className="pet-item__block">
                <div className="pet-item__block-title">
                Experince
                </div>
                <div className="pet-item__block-content">
                    <Range/>
                </div>
            </div>
        </div>
    )
}

export default PetItem