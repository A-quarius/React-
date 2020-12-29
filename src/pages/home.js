import React from 'react'
import { connect } from 'react-redux'
import { getList } from '../api/getList'
import { createAddAction, createAsyncAddAction } from '../redux/action/counterAction'

function Home(props) {
    return (
        <div>
            <h1>{props.info.count}</h1>
            <button onClick={props.onAdd}>增加</button>
            <button onClick={() => handleAsyncAdd(props)}>异步增加</button>
        </div>
    )
}

const handleAsyncAdd = (props) => {
    getList().then(res => {
        props.onAsyncAdd(res)
    })
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
export default hoc(Home)