import { ADD, ASYNC_ADD } from "../action/counterAction"

const initialState = {
    isLoading: false,
    count: 0,
    datas: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD:
            return { ...state, count: state.count + 1 }
        case ASYNC_ADD:
            return { ...state, count: state.count + payload }
        default:
            return state
    }
}
