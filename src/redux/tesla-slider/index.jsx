import {createSlice} from '@reduxjs/toolkit';


const testaSlice = createSlice({
    name: "tesla",
    initialState: {
        openMenu : false,
    },
    reducers: {
        toggleMenu : (state, action) => {
            state.openMenu = !state.openMenu
        },
    }
}) ;


export const {toggleMenu} = testaSlice.actions
export default testaSlice.reducer;