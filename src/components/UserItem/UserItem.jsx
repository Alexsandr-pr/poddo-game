

import "./user-item.scss"
import balance from "assets/icon/balance.webp"


const UserItem = ({
    coinsBalance,
    children,
    image,
    name, 
    text,
    active
}) => {
    return (
        <div className='user-item'>
            <div className="user-item__left user-left">
                <div className="user-left__image">
                    <img src={image} />
                    {active && <span className="user-left__active"></span>}
                </div>
                
                <div className="user-left__body">
                    <div className="user-left__name">{name}</div>
                    <p className="user-left__text">{text}</p>
                    {
                        coinsBalance && 
                        <p className="user-left__coins">
                            <img width={14} height={14} src={balance} alt="" />
                            {coinsBalance}
                        </p>
                    }
                </div>
            </div>
            <div className="user-item__right">
                {children}
            </div>
        </div>
    )
}

export default UserItem