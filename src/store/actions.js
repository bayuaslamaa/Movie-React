import axios from 'axios'

export const SET_MOVIES = 'SET_MOVIES'
export const SET_VALUE = 'SET_VALUE'

export const setMovies = (data) => {
    return { type: SET_MOVIES, payload: data }
}

export const setValue = (value) => {
    return { type: SET_VALUE, payload: value }
}




function fetchMovies(search) {
    return axios({
        method: 'get',
        url: 'http://www.omdbapi.com/',
        params: {
            apiKey: '24bdb17a',
            s: search
        }
    })
}


export const getMovies = (search) => {
    return dispatch => {
        fetchMovies(search)
            .then(({ data }) => {
                const { Search } = data
                if (Search) dispatch(setMovies(Search))
            })
            .catch(console.log)
    }
}