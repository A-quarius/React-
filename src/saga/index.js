import { all } from 'redux-saga/effects'
import counterTask from './counterTask'
import studentTask from './studentTask'
import takeEvery from './takeEvery';
export default function* () {
    yield all([counterTask(), studentTask(), takeEvery()])
    console.log("saga 完成了all");
}