import {
    MENTOR_LIST_REQUEST,
    MENTOR_LIST_SUCCESS,
    MENTOR_LIST_FAIL,
} from "../constants/mentorConstants";
import axios from "axios";

export const listMentors = () => async (dispatch) => {
    try {
        dispatch({
            type: MENTOR_LIST_REQUEST
        });

        const { data } = await axios.get(
            `https://ataseng.pythonanywhere.com/user/mentor/all/`
        );

        dispatch({
            type: MENTOR_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type : MENTOR_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        });
    }
};