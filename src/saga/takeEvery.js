import { takeEvery, call, put, select } from 'redux-saga/effects'
import { getCounter } from '../api/testCounter';
import { ASYNC_DECREASE, createIncreasePayloadAction } from '../redux/action/counterAction'

/**
 * 这里也要写成一个生成器函数，因为会在函数中使用yield
 */
function* listen() {
    const count = yield call(getCounter)
    yield put(createIncreasePayloadAction(count))
    console.log("触发了监听的", ASYNC_DECREASE);
    const state = yield select()
    console.log(state);
}

export default function* () {
    yield takeEvery(ASYNC_DECREASE, listen)
    console.log("正在监听", ASYNC_DECREASE);
}