
import IconStar from "components/icons/IconStar";
import "./rating.scss";

const Rating = ({rating, quantity}) => {
    return (
        <div className="rating">
            <IconStar/>
            <p className="rating__number">{rating}</p>
            {
                quantity && <p className="rating__quantity">({quantity})</p>
            }
        </div>
    )
}

export default Rating