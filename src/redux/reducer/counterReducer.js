import { DECREASE, INCREASE, INCREASE_PAYLOAD } from "../action/counterAction"

const initialState = 0

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        case INCREASE_PAYLOAD:
            return state 
        default:
            return state
    }
}
