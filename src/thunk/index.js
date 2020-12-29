export default function (extra) {
    return store => next => action => {
        if (typeof action === 'function') {
            return action(stroe.dispatch, store.getState, extra)
        } else {
            next(action)
        }
    }
}