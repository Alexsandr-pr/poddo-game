import React from 'react'


import "./fon.scss"
import { useSelector } from 'react-redux'
const BlockFon = () => {
    const {fon} = useSelector(store => store.menu);

    return (
        <div className={`block-fon ${fon ? "active" : ""}`}>

        </div>
    )
}

export default BlockFon