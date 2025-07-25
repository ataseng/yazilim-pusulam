import {
    MENTOR_LIST_REQUEST,
    MENTOR_LIST_SUCCESS,
    MENTOR_LIST_FAIL
} from "../constants/mentorConstants";

export const mentorListReducer = (state = { mentors: [] }, action) => {
    switch (action.type) {
        case MENTOR_LIST_REQUEST:
            return { loading: true, mentors:[] };
        
        case MENTOR_LIST_SUCCESS:
            return {loading: false, mentors: action.payload };
    
        case MENTOR_LIST_FAIL:
            return {loading: false, error: action.payload };

        default:
            return state;
    }
};