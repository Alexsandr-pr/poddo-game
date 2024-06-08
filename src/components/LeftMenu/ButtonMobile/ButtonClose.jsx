import { useDispatch } from "react-redux";
import { onActiveModal } from "store/menuSlise";


const ButtonClose = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(onActiveModal(false))}  className="button-close">
            CLOSE
        </button>
    )
}

export default ButtonClose