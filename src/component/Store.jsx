import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";


const store =configureStore({
    reducer:{
        Value:Slice
    }
})
export default store