import { all, takeLatest } from "redux-saga/effects";

import { toggleState } from "../store/actions/states";
import { load } from "./states-sagas";

export default function* rootSaga() {
    return yield all([
        takeLatest(toggleState, load)
    ]);
}