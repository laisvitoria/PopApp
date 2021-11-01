import { call } from "redux-saga/effects"
import apiLocalization from "../services/api/api-localization"

const api = apiLocalization.create()

export function* load(){
    try {
        const response = yield call(api.getStates)

        yield console.log(response.data)
    } catch (err) {
        yield console.log(err)
    }
}