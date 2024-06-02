

import "./input-chat.scss";

const InputChat = ({
    placeholder,
    children
}) => {
    return (
        <label className="input-chat__label">
            <input placeholder={placeholder} type="text" className="input-chat__input"/>
            <span className="input-chat__btn-parent">
                {children}
            </span>
        </label>
    )
}

export default InputChat;