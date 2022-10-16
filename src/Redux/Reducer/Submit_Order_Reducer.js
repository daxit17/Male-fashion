import * as ActionTypes from "../ActionTypes";

const initval = {
    isLoading: false,
    order: false,
    error: ''
}

export const submitReducer = (state = initval, action) => {
    switch (action.type) {
        case ActionTypes.SUBMIT_ORDER:
            return {
                ...state,
                isLoading: false,
                order: true,
                error: ''
            }

        default:
            return state;
    }
}