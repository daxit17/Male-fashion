import * as ActionTypes from "../ActionTypes";

export const SubmitOrder = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SUBMIT_ORDER, payload: data });
}