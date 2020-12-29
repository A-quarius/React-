import { takeEvery, call, put, select, take, delay, fork, cancel } from 'redux-saga/effects'
import { getCounter } from '../api/testCounter';
import { ASYNC_DECREASE, ASYNC_INCREASE, createAsyncIncreaseAction, createIncreaseAction, createIncreasePayloadAction } from '../redux/action/counterAction'

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
/**
 * 一个生成器函数，模拟takeEvery的实现原理
 */
function* asyncIncrease() {
    let task;
    while (true) {
        // 虽然这里的take是阻塞的，但是fork相当于开启一个新的线程，不会阻塞主线程
        yield take(ASYNC_INCREASE)
        if (task) {
            yield cancel(task)
        }
        task = yield fork(function* () {
            yield delay(2000)
            yield put(createIncreaseAction())
        })
    }
}

export default function* () {
    // 开启一个非阻塞主线程的新任务
    yield fork(asyncIncrease);
    yield takeEvery(ASYNC_DECREASE, listen)
    console.log("正在监听", ASYNC_DECREASE);
}