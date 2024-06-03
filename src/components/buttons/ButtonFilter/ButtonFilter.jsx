
import "./button-filter.scss"
const ButtonFilter = ({text, active}) => {
    return (
        <button className={`button-filter ${active ? "active" : " "}`}>    
            {text}
        </button>
    )
}

export default ButtonFilter