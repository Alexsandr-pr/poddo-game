import UserItem from 'components/UserItem/UserItem'
import ButtonMain from 'components/buttons/ButtonMain/ButtonMain'
import ButtonPoints from 'components/buttons/ButtonPoints/ButtonPoints'

import "./home-post.scss";
import picture from "./img/picture.webp"
import imageMain from "./img/Depositphotos.webp"
import minecraft from "assets/minecraft-logo.webp"
import imageUser from "assets/user.webp"
import InputChat from 'components/forms/InputChat/InputChat';
import EyeIcon from 'components/icons/post/EyeIcon';
import HeartIcon from 'components/icons/post/HeartIcon';
import MessageIcon from 'components/icons/post/MessageIcon';
import RepostIcon from 'components/icons/post/RepostIcon';
import ButtonGive from 'components/buttons/ButtonGive/ButtonGive';

import user1 from "./img/users/02.webp"
import user2 from "./img/users/02.webp"
import user3 from "./img/users/03.webp"

const HomePost = () => {
    return (
        <div className='post-big'>
            <div className="post-big__top">
                <UserItem image={picture} text={"Public"} name={"Picachuu"}>
                    <div className="post-big__buttons-top">
                        <ButtonMain text={"Follow"}/>
                        <ButtonPoints/>
                    </div>
                </UserItem>
            </div>
            <div className="post-big__image post-big-image">
                <div className="post-big-image__tag">
                    <img src={minecraft} alt="" />
                    <p>Minecraft</p>
                </div>
                <img src={imageMain} alt="" className="post-big-image__img" />
            </div>

            <div className="post-big__buttons post-big-buttons">
                <div className="post-big-buttons__items">
                    <div className="items-button-2">
                        <div className="post-big-buttons__item">
                            <button className="post-big-buttons__link">
                                <HeartIcon/>
                            </button>
                        </div>
                        <div className="post-big-buttons__item">
                            <button className="post-big-buttons__link">
                                <MessageIcon/>
                            </button>
                        </div>
                        <div className="post-big-buttons__item">
                            <button className="post-big-buttons__link">
                                <RepostIcon/>
                            </button>
                        </div>
                    </div>
                    <li className="post-big-buttons__item">
                        <button className="post-big-buttons__link">
                            <ButtonGive/>
                        </button>
                    </li>
                </div>
                <div className="post-big-buttons__view">
                    <EyeIcon/>
                    <p>56 Views</p>
                </div>
            </div>  

            <div className="post-big-liked">
                <div className="post-big-liked__users">
                    <a className="post-big-liked__user">
                        <img src={user1} alt="" />
                    </a>
                    <a className="post-big-liked__user">
                        <img src={user2} alt="" />
                    </a>
                    <a className="post-big-liked__user">
                        <img src={user3} alt="" />
                    </a>
                </div>
                <div className="post-big-liked__text">Liked by mr.beast and 34 others</div>
            </div>

            <div className="text">
                What you need to do for this is very simple. Register and click the Become a Creator button. Making money is not far off. Come on, be a creator.
            </div>

            <div className="post-big__write ">
                <UserItem image={imageUser}>
                </UserItem>
                <InputChat placeholder={"Post a comment.."}>
                    <ButtonMain text={"Post"}/>
                </InputChat>
            </div>
        </div>
    )
}

export default HomePost