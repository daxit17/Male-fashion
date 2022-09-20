import * as ActionTypes from "../ActionTypes";

const initVal = {
    isLoading: false,
    user: null,
    error: ''
}
export const authReducer = (state = initVal, action) => {

    switch (action.type) {

        case ActionTypes.SIGNED_IN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }

        case ActionTypes.LOGGED_OUT:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }

        default:
            return state;

    }

}