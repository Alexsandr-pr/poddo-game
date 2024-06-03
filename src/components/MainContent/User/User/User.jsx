import ButtonMain from 'components/buttons/ButtonMain/ButtonMain'


import "./user.scss";
import IconLink from 'components/icons/IconLink';
import user from "assets/user-big.png";
import pet from "assets/pet.png"
import useMediaQuery from 'hooks/useMediaQuery';
import ButtonWhite from 'components/buttons/ButtonWhite/ButtonWhite';
const User = () => {

    const query = useMediaQuery('(max-width:767.98px)');

    return (
        <div className='user'>
            <div className="user__top user-top">
                <div className="user-top__img">
                    <button className='user-top__img-button'>
                        <IconLink/>
                    </button>
                </div>
                <div className="user-top__body user-body">
                    
                    {
                        !query && <UserBodyItems/>
                    }
                    <div className="user-body__content user-image">
                        <div className="user-image__image">
                            <img className='user-image__image-user' width={121} height={121} src={user} alt="" />
                            <img src={pet} className="user-image__pet"/>
                        </div>
                    </div>
                    {
                        query && <UserBlock/>
                    }
                    {
                        !query && <UserBodyText/>
                    }
                </div>
                {
                    query && <UserBodyItems/>
                }
                {
                    query && <UserBodyText/>
                }
            </div>
            {
                !query && <UserBlock/>
            }
            
            
            <div className="user__buttons">
                <ButtonMain text={"Subscribe"}/>
                <ButtonMain text={"Follow"}/>
                <ButtonMain text={"Message"}/>
            </div>

            <div className="user__stats user-stats">
                <p className='user-stats__level'>Level 2</p>
                <div className="user-stats__body">
                    <div className="quest-range-2">
                        <div className="quest-range__indicator-2">80%</div>  
                    </div>
                </div>
                <div className="user-stats__btn">
                    <ButtonWhite>
                        Pro Pass
                    </ButtonWhite>
                </div>
            </div>

            <div className="user__bottom">

            </div>
        </div>
    )
}
const UserBodyItems = () => {
    return (
        <div className="user-body__items">
            <div className="user-body__item">
                <div className="user-body__title">2.5K</div>
                <div className="user-body__text">FOLLOWERS</div>
            </div>
            <div className="user-body__item">
                <div className="user-body__title">1.3k</div>
                <div className="user-body__text">FOLLOWING</div>
            </div>
            <div className="user-body__item">
                <div className="user-body__title">653</div>
                <div className="user-body__text">SUPPORTERS</div>
            </div>
        </div>
    )
}


const UserBodyText = () => {
    return (
        <div className="user-body__text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
    )
}

const UserBlock = () => {
    return (
        <div className="user-block">
            <div className="user__name">Edwerd Evans</div>
            <div className="user__nick">@evans99</div>
        </div>
    )
}

export default User