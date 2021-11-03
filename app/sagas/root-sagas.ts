import { all, takeLatest } from "redux-saga/effects";

import { load } from "../features/statesList/states-sagas";

export default function* rootSaga() {
    return yield all([
        takeLatest("LOAD_STATES", load)
    ]);
}