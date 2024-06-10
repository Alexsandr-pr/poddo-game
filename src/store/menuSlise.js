import { createSlice } from "@reduxjs/toolkit"; 



const menuSlise = createSlice({
    name: "mobileMenu",
    initialState: {
        mobileMenu:false,
        fon: false
    },
    reducers:{
        onActiveModal(state, action){
            state.mobileMenu = action.payload;
        },
        onActiveFon(state, action){
            state.fon = action.payload;
        },
    }
})

export const {
    onActiveModal,
    onActiveFon
} = menuSlise.actions;

export default menuSlise.reducer;