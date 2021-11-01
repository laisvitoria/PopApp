import { all, takeLatest } from "redux-saga/effects";

import { load } from "./states-sagas";

export default function* rootSaga() {
    return yield all([
        takeLatest("LOAD_STATES", load)
    ]);
}