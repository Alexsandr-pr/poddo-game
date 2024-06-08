
import "./button-input.scss";

const ButtonInput = ({children}) => {
    return (
        <button className="button-input button">
            {children}
        </button>
    )
}

export default ButtonInput