import { all } from "redux-saga/effects";
import { authSaga } from "./Auth_saga";

export function* rootSaga() {
    yield all([
        authSaga()
    ])
}