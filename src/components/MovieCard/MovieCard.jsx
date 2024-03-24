import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { load } from '../../api/api'

const MovieCard = () => {

    const { id } = useParams()
    console.log('params', id)
    const [movie, setMovie] = useState({})
    console.log('movie', movie)
    useEffect(() => {
        load(`https://api.themoviedb.org/3/movie/${id}?language=en-US`).then(setMovie)
    }, [])
    return (
        <div>
            This is film have id: {id}
        </div>
    )
}

export default MovieCard