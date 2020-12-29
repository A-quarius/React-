import { delay, fork, put, take, takeEvery } from "redux-saga/effects"
import { createDecreaseAction, DECREASE } from "../redux/action/counterAction"

function* autoControl() {
    while (true) {
        // 监听一个action
        yield take(DECREASE)
        yield fork(function* () {
            yield delay(2000)
            yield put(createDecreaseAction())
        })
    }
}

export default function* () {
    yield takeEvery(DECREASE, autoControl)
    console.log("正在监听");
}