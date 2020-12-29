import React from 'react'
import { connect } from 'react-redux'
import store from '../redux'
import { asyncAdd, createAddAction, createAsyncAddAction } from '../redux/action/counterAction'

function ChunkHome(props) {
    return (
        <div>
            <h1>{props.info.count}</h1>
            <button onClick={() => store.dispatch(asyncAdd())}>chunk增加</button>
        </div>
    )
}
const mapState2Props = (state) => {
    return {
        info: state.counterReducer
    }
}

const mapReucer2Props = (dispatch) => {
    return {
        onAdd() {
            dispatch(createAddAction())
        },
        onAsyncAdd(payload) {
            dispatch(createAsyncAddAction(payload))
        }
    }
}

const hoc = connect(mapState2Props, mapReucer2Props)
export default hoc(ChunkHome)