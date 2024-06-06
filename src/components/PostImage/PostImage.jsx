

import GameName from "components/GameName/GameName";
import "./post-image.scss";

const PostImage = ({name, imageBig, imageGameLogo}) => {
    return (
        
            <div className="post-big__image post-big-image">
                <div className="post-big-image__tag">
                    <GameName text={name} image={imageGameLogo}/>
                </div>
                <img src={imageBig} alt="" className="post-big-image__img" />
            </div>
        
    )
}

export default PostImage