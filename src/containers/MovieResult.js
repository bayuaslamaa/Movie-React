import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/actions'
import MovieCard from '../components/MovieCard'

export default () => {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    console.log(movies)
    useEffect(() => {
        dispatch(getMovies(value))
    }, [dispatch, value])

    return (
        <>
            {
                movies.map(movie => (<MovieCard movie={movie} />))
            }
        </>
    )
}
