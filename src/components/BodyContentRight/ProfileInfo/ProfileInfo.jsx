import { useState } from "react";
import ParentBg from "../ParentBg/ParentBg"


import "./profile-info.scss";
import BlockTop from "../BlockTop/BlockTop";
import Balance from "components/Balance/Balance";
import ButtonMain from "components/buttons/ButtonMain/ButtonMain";
import ButtonTransparent from "components/buttons/ButtonTransparent/ButtonTransparent";

const ProfileInfo = () => {

    const [active] = useState(false);


    return (
        <ParentBg>
            <div className="profile-info">
                <BlockTop title={"ALTERSKY"}>
                    <div className={`profile-info__online ${active && "active" }`}>
                        {
                            active ? <p>Online</p> : <p>Offline</p>
                        }
                    </div>
                </BlockTop>
                
                <div className="profile-bottom">
                    <div className="profile-bottom__left">
                        <Balance number={12544}/>
                    </div>
                    <div className="profile-bottom__right profile-bottom-right">
                        <div className="profile-bottom-right__buttons">
                            <ButtonTransparent text={"25 followers"}/>
                            <ButtonTransparent text={"14 following"}/>
                        </div>
                        <div className="profile-bottom-right__buttons">
                            <ButtonMain text={"Order"}/>
                            <ButtonMain text={"ProPass"}/>
                        </div>
                    </div>
                </div>
            </div>
        </ParentBg>
        
    )
}

export default ProfileInfo