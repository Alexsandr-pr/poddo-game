import BlockTop from 'components/BodyContentRight/BlockTop/BlockTop'
import ParentBg from 'components/BodyContentRight/ParentBg/ParentBg'
import ButtonViolet from 'components/buttons/ButtonViolet/ButtonViolet'


import image1 from "./img/01.webp"
import image2 from "./img/02.webp"
import image3 from "./img/03.webp"
import UserItem from 'components/UserItem/UserItem'


import "./live-chat.scss"
import InputChat from 'components/forms/InputChat/InputChat'
import InputChatIcon from 'components/icons/InputChatIcon'

const data = [
    {
        name: "BigDaddy",
        image: image1,
        text: "Lorem ipsum?",
    },
    {
        name: "NoobPlayer69",
        image: image2,
        text: "Lorem ipsum dolor sit amet, conse",
    },
    {
        name: "Mr Jam",
        image: image3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]



const LiveChat = () => {
    return (
        <ParentBg>
            <div className='live-chat'>
                <BlockTop title={"LIVE CHAT"}>
                    <ButtonViolet text={"Add Group "}/>
                </BlockTop>
                <div className="live-chat__list">
                    {
                        data.map((item, i) => {
                            return (
                                <UserItem key={i} {...item} >
                                    <p className='text'>2h ago</p>
                                </UserItem>
                            )
                        })
                    }
                </div>


                <InputChat placeholder={"Send Message"}>
                    <button className="input-chat__button">
                        <InputChatIcon/>
                    </button>
                </InputChat>
            </div>
        </ParentBg>
    )
}

export default LiveChat