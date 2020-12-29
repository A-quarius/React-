import { getList } from "../../api/getList"

export const ADD = "add"
export const ASYNC_ADD = 'async-add'
export const CHUNK_ASYNC_ADD = 'chunk-async-add'
export const createAddAction = (payload) => ({
    type: ADD,
    payload
})

export const createAsyncAddAction = (payload) => ({
    type: ASYNC_ADD,
    payload
})

export const asyncAdd = () => {
    return async function (dispatch) {
        const result = await getList()
        dispatch(createAsyncAddAction(result))
    }
}
