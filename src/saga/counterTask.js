import { INCREASE } from "../redux/action/counterAction";
import { take } from "redux-saga/effects"

export default function* () {
        const result = yield take(INCREASE)
        console.log("increase action发生了", result);
}