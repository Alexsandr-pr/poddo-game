import { createSlice } from "@reduxjs/toolkit"; 



const menuSlise = createSlice({
    name: "mobileMenu",
    initialState: {
        mobileMenu:false
    },
    reducers:{
        onActiveModal(state, action){
            state.mobileMenu = action.payload;
        }
    }
})

export const {
    onActiveModal
} = menuSlise.actions;

export default menuSlise.reducer;