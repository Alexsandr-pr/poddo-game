
import MainBlockTop from "components/MainContent/MainBlockTop/MainBlockTop"
import ButtonWhite from "components/buttons/ButtonWhite/ButtonWhite"



import image1 from "./img/04.svg"
import image2 from "./img/02.svg"
import image3 from "./img/03.svg"
import image4 from "./img/04.svg"
import PetItem from "../PetItem/PetItem"

import "./pet-storage.scss";
import PetFilter from "../PetFilter/PetFilter"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { onActiveFon } from "store/menuSlise"


const data = [
    {
        image: image1,
        name:"Milo",
        nick:"Pet Lion"
    },
    {
        image: image2,
        name:"Hipo",
        nick:"Pet Hipopotomous"
    },
    {
        image: image3,
        name:"Jumbo",
        nick:"Pet Elephantl"
    },
    {
        image: image4,
        name:"Rocky",
        nick:"Pet Tiger"
    },
    {
        image: image1,
        name:"Milo",
        nick:"Pet Lion"
    },
    {
        image: image2,
        name:"Hipo",
        nick:"Pet Hipopotomous"
    },
    {
        image: image3,
        name:"Jumbo",
        nick:"Pet Elephantl"
    },
    {
        image: image4,
        name:"Rocky",
        nick:"Pet Tiger"
    },
    {
        image: image1,
        name:"Milo",
        nick:"Pet Lion"
    },
    {
        image: image2,
        name:"Hipo",
        nick:"Pet Hipopotomous"
    },
    {
        image: image3,
        name:"Jumbo",
        nick:"Pet Elephantl"
    },
    {
        image: image4,
        name:"Rocky",
        nick:"Pet Tiger"
    },
    {
        image: image1,
        name:"Milo",
        nick:"Pet Lion"
    },
    {
        image: image2,
        name:"Hipo",
        nick:"Pet Hipopotomous"
    },
    {
        image: image3,
        name:"Jumbo",
        nick:"Pet Elephantl"
    },
    {
        image: image4,
        name:"Rocky",
        nick:"Pet Tiger"
    }
]

const PetStorage = () => {

    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    const onChangeActive = (bool) => {
        dispatch(onActiveFon(bool));
        setState(bool)
    }



    return (
        
        <>
            <div className="pet-storage">
                <MainBlockTop title={"Pet Storage"}> 
                    <ButtonWhite cb={() => onChangeActive(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M4.73207 8.98569L7.88754 8.99534C8.08429 8.99603 8.24357 9.1608 8.24357 9.36279V11.138C8.24357 11.3406 8.12846 11.524 7.94911 11.6088L5.08476 12.9538C5.01783 12.9848 4.94689 13 4.87595 13C4.78159 13 4.68723 12.9724 4.60491 12.918C4.46102 12.8228 4.37402 12.6588 4.37402 12.483V9.35314C4.37402 9.14977 4.53464 8.985 4.73207 8.98569ZM11.6167 0C12.381 0 13 0.637684 13 1.42497V2.42044C13 2.80236 12.8508 3.16912 12.5857 3.4366L8.35748 7.71356C8.28453 7.78802 8.18548 7.82938 8.08309 7.8287L4.54281 7.81766C4.43506 7.81766 4.33266 7.77147 4.25905 7.69081L0.373436 3.4173C0.133179 3.15326 0 2.80443 0 2.4425V1.42565C0 0.638373 0.619048 0 1.38332 0H11.6167Z" fill="#E3E3E3"/>
                        </svg>
                        <span>Filters</span>
                    </ButtonWhite>
                </MainBlockTop>
                <div className="pet-storage__items">
                    {
                        data.map(item => {
                            return (
                                <PetItem {...item}/>
                            )
                        })
                    }
                </div>
            </div>
            {
                state &&  <PetFilter cb={() => onChangeActive(false)}/>
            }
        </>
    )
}

export default PetStorage