
import "./button-white.scss";


const ButtonWhite = ({children, cb}) => {
    return (
        <button onClick={() => cb()} className="button-white button">
            {children}
        </button>
    )
}

export default ButtonWhite