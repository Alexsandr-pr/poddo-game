
import { useDispatch } from "react-redux"
import "./button-mobile.scss"
import { onActiveModal } from "store/menuSlise";


const ButtonMobile = () => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(onActiveModal(true))} className="button-mobile">
            MENU
        </button>
    )
}

export default ButtonMobile