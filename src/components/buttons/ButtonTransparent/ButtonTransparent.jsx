

import useNumberAnimation from "hooks/useNumberAnimation";
import "./button-transparent.scss"

const ButtonTransparent = ({text}) => {

    const targetCount = parseInt(text.split(" ")[0]); // Получить число из текста
    const count = useNumberAnimation(targetCount, 2); // Использовать кастомный хук для анимации

    return (
        <button className="button-transparent button">
            {count} followers
        </button>
    )
}

export default ButtonTransparent