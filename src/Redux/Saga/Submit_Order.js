import * as ActionTypes from "../ActionTypes";
import { history } from '../../History/History';
import { all, put, takeEvery } from 'redux-saga/effects'
import { setAlert } from "../Actions/Alert_Action";


function* SubmitOrder(action) {
    try {
        history.push("/")
        yield put(setAlert({ text: "Your order is succefully", color: "success" }))
    } catch (e) {
        yield put(setAlert({ text: e.payload, color: "error" }))
        console.log(e);
    }
}

function* watchSubmitOrder() {
    yield takeEvery(ActionTypes.SUBMIT_ORDER, SubmitOrder);
}


export function* SubmitOrderSaga() {
    yield all([
        watchSubmitOrder()
    ])
}