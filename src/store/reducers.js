import * as t from './actions'

const initial = {
    movies: [],
    value: ''
}


export default function reducer(state = initial, action) {
    const { type, payload } = action
    switch (type) {
        case t.SET_MOVIES:
            return { ...state, movies: payload }
        case t.SET_VALUE:
            return { ...state, value: payload }
        default:
            return state
    }
}