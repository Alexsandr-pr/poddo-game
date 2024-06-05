

import "./post-image.scss";

const PostImage = ({name, imageBig, imageGameLogo}) => {
    return (
        
            <div className="post-big__image post-big-image">
                <div className="post-big-image__tag">
                    <img src={imageGameLogo} alt="" />
                    <p>{name}</p>
                </div>
                <img src={imageBig} alt="" className="post-big-image__img" />
            </div>
        
    )
}

export default PostImage