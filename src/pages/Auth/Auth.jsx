
import imageLogin from "assets/login.png"
import AuthBody from 'components/Auth/AuthBody/AuthBody'

import "./auth.scss";

const Auth = () => {
    return (
        <div className='auth'>
            <div className="auth__left">
                <AuthBody/>
            </div>
            <div className="auth__image">
                <img src={imageLogin} alt="" />
            </div>
        </div>
    )
}

export default Auth