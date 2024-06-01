

import "./user-item.scss"


const UserItem = ({
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
                </div>
            </div>
            <div className="user-item__right">
                {children}
            </div>
        </div>
    )
}

export default UserItem