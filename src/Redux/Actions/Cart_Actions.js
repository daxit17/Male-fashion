import * as ActionTypes from "../ActionTypes";

export const AddCart = (v) => (dispatch) => {
    dispatch({ type: ActionTypes.ADD_CART, payload: { id: v.id, quantity: 1 } })
}

export const Increment = (id) => (dispatch) => {
    dispatch({ type: ActionTypes.INCREMENT, payload: id });
}

export const Decrement = (id) => (dispatch) => {
    dispatch({ type: ActionTypes.DECREMENT, payload: id });
}