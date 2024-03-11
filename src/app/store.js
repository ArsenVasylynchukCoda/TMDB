import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import moviesReducer from '../features/movies/moviesSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        movies: moviesReducer
    },
})