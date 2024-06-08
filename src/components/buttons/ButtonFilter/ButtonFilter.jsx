
import "./button-filter.scss"
const ButtonFilter = ({text, active}) => {
    return (
        <button className={`button-filter button ${active ? "active" : " "}`}>    
            {text}
        </button>
    )
}

export default ButtonFilter