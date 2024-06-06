import ButtonViolet from "components/buttons/ButtonViolet/ButtonViolet"

import { useAutoAnimate } from "@formkit/auto-animate/react"

import "./user-bottom.scss"
import { useState } from "react"
import UserPost from "../UserPost/UserPost";
import UserGig from "../UserGigs/UserGig";



const UserBottom = () => {

    const [state, setState] = useState("post");
    const [block] = useAutoAnimate()
    return (
        <div className="user-bottom">
            <div className="user-bottom__head user-bottom-head">
                <div className="user-bottom-head__triggers">
                    <button onClick={() => setState("post")} className={`user-bottom-head__trigger ${state === "post" ? "active" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M14.0423 0.406738C17.3626 0.406738 19.5932 2.73648 19.5932 6.20311V14.2036C19.5932 17.6702 17.3626 19.9999 14.0413 19.9999H5.55093C2.23058 19.9999 0 17.6702 0 14.2036V6.20311C0 2.73648 2.23058 0.406738 5.55093 0.406738H14.0423ZM15.1226 10.7422C14.0725 10.0871 13.2617 11.0071 13.043 11.3013C12.8322 11.5854 12.6509 11.8988 12.4598 12.2122C11.9929 12.9856 11.4579 13.8773 10.5319 14.396C9.18625 15.1411 8.16468 14.4546 7.42978 13.9552C7.15395 13.7691 6.88599 13.5932 6.61902 13.4759C5.96096 13.1919 5.3689 13.5154 4.49017 14.6315C4.02914 15.2149 3.57204 15.7932 3.10903 16.3694C2.83221 16.7142 2.89822 17.246 3.27158 17.4765C3.86758 17.8435 4.5946 18.0406 5.41619 18.0406H13.6725C14.1385 18.0406 14.6054 17.9769 15.0507 17.8313C16.0535 17.5038 16.8495 16.7536 17.2652 15.7628C17.616 14.9298 17.7864 13.9188 17.4583 13.0776C17.349 12.7986 17.1855 12.5387 16.9559 12.3103C16.354 11.7128 15.7915 11.1547 15.1226 10.7422ZM6.36667 4.32538C5.01607 4.32538 3.91864 5.42429 3.91864 6.77453C3.91864 8.12476 5.01607 9.22367 6.36667 9.22367C7.71629 9.22367 8.8147 8.12476 8.8147 6.77453C8.8147 5.42429 7.71629 4.32538 6.36667 4.32538Z" fill="#67696F"/>
                        </svg>
                        POSTS
                    </button>
                    <button onClick={() => setState("gig")}  className={`user-bottom-head__trigger ${state === "gig" ? "active" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                            <path d="M10.6189 0.40686C13.2185 0.40686 15.3193 1.43326 15.348 4.04243V18.6039C15.348 18.767 15.3097 18.93 15.2329 19.0739C15.1082 19.3041 14.8972 19.4768 14.6382 19.5535C14.3888 19.6303 14.1106 19.5919 13.8804 19.4576L7.66443 16.3496L1.43888 19.4576C1.29595 19.5334 1.13192 19.5823 0.968845 19.5823C0.431664 19.5823 0 19.1411 0 18.6039V4.04243C0 1.43326 2.11036 0.40686 4.70034 0.40686H10.6189ZM11.2712 6.20075H4.04805C3.63557 6.20075 3.29983 6.53648 3.29983 6.95855C3.29983 7.37967 3.63557 7.71636 4.04805 7.71636H11.2712C11.6837 7.71636 12.0194 7.37967 12.0194 6.95855C12.0194 6.53648 11.6837 6.20075 11.2712 6.20075Z" fill="#8C67F6"/>
                        </svg>
                        GIGS
                    </button>
                    <span style={{"left": state === "post" ? "0" : "50%"}} className="indicator-active"></span>
                </div>
                
                {state === "post" && <ButtonViolet text={"Create Post"}/>}
                {state === "gig" && <ButtonViolet text={"Create Gig"}/>}
            
            </div>

            <div ref={block} className="user-bottom__list">
                {state === "post" && 
                    <>
                        <UserPost/>
                        <UserPost/>
                    </>
                }
                {state === "gig" && 
                    <>
                        <UserGig/>
                        <UserGig/>
                    </>
                }
            </div>
        </div>
    )
}

export default UserBottom