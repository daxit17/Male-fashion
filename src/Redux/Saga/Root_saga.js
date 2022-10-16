import { all } from "redux-saga/effects";
import { authSaga } from "./Auth_saga";
import { SubmitOrderSaga } from "./Submit_Order";

export function* rootSaga() {
    yield all([
        authSaga(),
        SubmitOrderSaga()
    ])
}