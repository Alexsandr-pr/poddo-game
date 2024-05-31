

import "./block-top.scss"

const BlockTop = ({children, title}) => {
    return (
        <div className="profile-info-header">
            <p className="profile-info-header__name">{title}</p>
            {
                children
            }
        </div>
    )
}

export default BlockTop