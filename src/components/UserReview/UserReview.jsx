import Rating from "components/Rating/Rating"
import image from "assets/user.jpg"

import "./user-review.scss";

const UserReview = () => {
    return (
        <div className="user-review">
            <div className="user-review__body user-review-body">
                <div className="user-review-body__image">
                    <img src={image} alt="" />
                </div>
                <div className="user-review-body__content">
                    <div className="user-review-body__name">
                        mel891
                    </div>
                    <Rating rating={4.9}/>
                </div>
            </div>
            <div className="user-review__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  
            </div>
        </div>
    )
}

export default UserReview