import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ForgotPasswordApi, GoogleSignInApi, LogOutApi, SignInApi, SignUpApi } from '../../common/Api/Api';
import { auth } from '../../Firebase';
import { history } from '../../History/History';
import { setAlert } from '../Actions/Alert_Action';
import { loggedOutAction, signedInAction } from '../Actions/Auth_Actions';
import * as ActionTypes from "../ActionTypes";

function* SignUPUser(action) {
    try {
        const user = yield call(SignUpApi, action.payload);
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* SignInUser(action) {
    try {
        const user = yield call(SignInApi, action.payload);
        yield put(signedInAction(user))
        history.push("/")
        yield put(setAlert({ text: "Login succesfully", color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* LogOut(action) {
    try {
        const user = yield call(LogOutApi);
        yield put(loggedOutAction(user))
        history.push("/")
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* GoogleSignIn(action) {
    try {
        const user = yield call(GoogleSignInApi, action.payload);
        yield put(signedInAction(user))
        history.push("/")
        yield put(setAlert({ text: "Succesfully login with google...", color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* ForgotPassword(action) {
    try {
        const user = yield call(ForgotPasswordApi, action.payload);
        yield put(signedInAction(user))
        history.push("/")
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGN_UP_USER, SignUPUser);
}

function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGN_IN_USER, SignInUser);
}

function* watchLogOut() {
    yield takeEvery(ActionTypes.LOG_OUT, LogOut);
}

function* watchGoogleSignIn() {
    yield takeEvery(ActionTypes.GOOGLE_SIGN_IN, GoogleSignIn);
}

function* watchForgotPassword() {
    yield takeEvery(ActionTypes.FORGOT_PASSWORD, ForgotPassword);
}

export function* authSaga() {
    yield all([
        watchSignUp(),
        watchSignIn(),
        watchLogOut(),
        watchGoogleSignIn(),
        watchForgotPassword()
    ])
}