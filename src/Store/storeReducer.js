import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Reducers/rootReducers";
const store = configureStore({
    reducer : rootReducer,
})



export default store;