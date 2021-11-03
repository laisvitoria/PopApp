import { call, put } from "redux-saga/effects";
import apiLocalization from "../../services/api/api-localization";

import { loadStates } from "./actions-states";

const api = apiLocalization.create()

export function* load(){
    try {
        const response = yield call(api.getStates)

        yield put(loadStates(response.data))
    } catch (err) {
        yield put(err)
    }
}