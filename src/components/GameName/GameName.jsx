
import "./game-name.scss";

const GameName = ({
    text,
    image
}) => {
    return (
        <div className="game-name">
            {
                image && <img className="game-name__image" src={image} alt="" />
            }
            <p className="game-name__text">{text}</p>
        </div>
    )
}

export default GameName