import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlise"




export default configureStore({
    reducer: {
        menu: menuReducer,
    }
})