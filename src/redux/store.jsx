import {
    mentorListReducer
} from "./reducers/mentorReducers";
import { configureStore } from '@reduxjs/toolkit'

// const userInfoFromStorage = localStorage.getItem("userInfo");
// const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

// const initialState = {
//     userLogin: { userInfo: userInfo },
// };

const store = configureStore({
    reducer: {
        mentorList: mentorListReducer,
    },
    // preloadedState: initialState,
})

export default store;