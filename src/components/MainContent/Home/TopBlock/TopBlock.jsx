import ButtonInput from "components/buttons/ButtonInput/ButtonInput"
import SmileIcon from "components/icons/SmileIcon"
import AddPictureIcon from "components/icons/AppPictureIcon"
import ButtonMain from "components/buttons/ButtonMain/ButtonMain"

import "./top-block.scss"

const TopBlock = () => {
    return (
        <div className="home-top"> 
            <div className="home-top__label">Newsfeed</div>
            <h1 className="home-top__title">Check what your friends up to!</h1>
            <p className="home-top__text">Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.and very customize  continually.</p>
            <label htmlFor="" className="home-top__label">
                <input placeholder="What’s on your mind , Kevin ?" type="text" className="home-top__input" />
                <div className="home-top__buttons">
                    <ButtonInput>
                        <AddPictureIcon/>
                    </ButtonInput>
                    <ButtonInput>
                        <SmileIcon/>
                    </ButtonInput>
                    <ButtonMain text={"Create"}/>
                </div>
            </label>
        </div>
    ) 
}

export default TopBlock