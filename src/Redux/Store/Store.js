

import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Slice/PostSlice'

export const Store = configureStore({
    reducer: {
        posts: postReducer
    }
})

export default Store;