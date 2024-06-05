
import "./user-post.scss";
import image from "./img/image.svg"
import PostImage from "components/PostImage/PostImage";
import UserItem from "components/UserItem/UserItem";

import user from "assets/user.webp"
import ButtonPoints from "components/buttons/ButtonPoints/ButtonPoints";

const UserPost = () => {
    return (

        
        <div className="user-post">
            <UserItem text={"What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator."} image={user}>
                <ButtonPoints/>
            </UserItem>
            <PostImage imageBig={image} name={"Valheim"}/>
        </div>
    )
}

export default UserPost