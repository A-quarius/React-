import store from "."
import { createIncreaseAction, createDecreaseAction, createAsyncIncreaseAction, createAsyncDecreaseAction } from "./action/counterAction"

window.increase = function () {
    store.dispatch(createIncreaseAction())
}
window.decrease = function () {
    store.dispatch(createDecreaseAction())
}
window.asyncIncrease = function () {
    store.dispatch(createAsyncIncreaseAction())
}
window.asyncDecrease = function () {
    store.dispatch(createAsyncDecreaseAction())
}