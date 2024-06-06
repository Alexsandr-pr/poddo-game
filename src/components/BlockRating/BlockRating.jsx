
import IconStar from "components/icons/IconStar"
import "./block-rating.scss"

const BlockRating = ({
    title, 
    rating
}) => {
    return (
        <div className="star-rating__item">
                <div className="star-rating__title">{title}</div>
                <div  className="star-rating-block">
                    <div className="star-rating">
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                    </div>
                    <div className="star-rating__rating">{rating}</div>
                </div>
        </div>
    )
}

export default BlockRating