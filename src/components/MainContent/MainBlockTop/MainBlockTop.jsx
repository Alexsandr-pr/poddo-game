
import "./main-block-top.scss";

const MainBlockTop = ({children, title}) => {
    return (
        <div className="main-block__top">
            <h1 className="title-30">{title}</h1>
            {children}
        </div>
    )
}

export default MainBlockTop