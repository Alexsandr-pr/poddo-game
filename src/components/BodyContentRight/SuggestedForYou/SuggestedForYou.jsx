
import BlockTop from "../BlockTop/BlockTop";
import ParentBg from "../ParentBg/ParentBg";
import "./syggested-for.scss";


const SuggestedForYou = () => {
    return (
        <ParentBg>
            <div className="suggested-for">
                <BlockTop title={"SUGGESTED FOR YOU"}>
                    <button className="text">See All</button>
                </BlockTop>
            </div>
        </ParentBg>
    )
}

export default SuggestedForYou