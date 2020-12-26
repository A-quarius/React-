export const INCREASE = "increase"
export const DECREASE = "decrease"
export const INCREASE_PAYLOAD = "increase-payload"
export const ASYNC_INCREASE = "async-increase"
export const ASYNC_DECREASE = "async-decrease"

export const createIncreaseAction = () => ({
    type: INCREASE,
})

export const createDecreaseAction = () => ({
    type: DECREASE
})
export const createIncreasePayloadAction = (payload) => ({
    type: INCREASE_PAYLOAD,
    payload
})
/**
 * 异步的action
 */
export const createAsyncIncreaseAction = () => ({
    type: ASYNC_INCREASE,
})
/**
 * 异步的action
 */
export const createAsyncDecreaseAction = () => ({
    type: ASYNC_DECREASE
})

