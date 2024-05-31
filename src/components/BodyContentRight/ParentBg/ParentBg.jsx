
import "./parent-bg.scss";


const ParentBg = ({children}) => {
    return (
        <div className="parent-bg">
            {children}
        </div>
    )
}

export default ParentBg