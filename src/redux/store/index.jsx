import {configureStore} from '@reduxjs/toolkit';
import teslaSlice from "@/redux/tesla-slider"

export const store = configureStore({
    reducer: {
        tesla : teslaSlice
    }
})