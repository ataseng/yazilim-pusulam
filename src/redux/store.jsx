import {
    mentorListReducer
} from "./reducers/mentorReducers";
import { userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducers';
import { configureStore } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem("userInfo");
const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

const initialState = {
    userLogin: { userInfo: userInfo },
};

const store = configureStore({
    reducer: {
        mentorList: mentorListReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdateProfile: userUpdateProfileReducer,
        userList: userListReducer,
        userDelete: userDeleteReducer,
        userUpdate: userUpdateReducer
    },
    preloadedState: initialState,
})

export default store;