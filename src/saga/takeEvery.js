import { takeEvery } from 'redux-saga/effects'
import { ASYNC_DECREASE } from '../redux/action/counterAction'

/**
 * 这里也要写成一个生成器函数，因为会在函数中使用yield
 */
function* listen() {
    console.log("触发了监听的", ASYNC_DECREASE);
}

export default function* () {
    yield takeEvery(ASYNC_DECREASE, listen)
    console.log("正在监听", ASYNC_DECREASE);
}