
import InputChatIcon from "components/icons/InputChatIcon";

import "./input-chat.scss";

const InputChat = () => {
    return (
        <label className="input-chat__label">
            <input placeholder="Send Message" type="text" className="input-chat__input"/>
            <button className="input-chat__button">
                <InputChatIcon/>
            </button>
        </label>
    )
}

export default InputChat;