import * as ActionTypes from "../ActionTypes";

export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_USER, payload: data });
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_IN_USER, payload: data });
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNED_IN_USER, payload: data });
}

export const logOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOG_OUT })
}

export const loggedOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGGED_OUT })
}

export const googleSignIn = () => (dispatch) => {
    dispatch({ type: ActionTypes.GOOGLE_SIGN_IN })
}

export const forgotPassword = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.FORGOT_PASSWORD, payload: data })
}