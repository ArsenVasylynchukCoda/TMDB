import {useEffect, useState} from "react";
import Movie from "../Movie/Movie";
import './MoviesBlock.css';
import { useFetch } from '../../hooks/debounce'

function MoviesBlock({options}) {
    const [movies, setMovies] = useState([])
    const { data, loading } = useFetch(options.url)
    // console.log('data', data?.results)
    useEffect(() => {
        setMovies(data?.results)
    }, [data]);

    return (
        <div className={`${options.className} movies`}>
            <h3 className={`${options.className}__title movies__title`}>{options.title}</h3>
            <div className={`${options.className}__block movies__block`}>
                {
                    movies && movies.map(movie => {
                        return <Movie id={movie.id} className={options.className}/>
                    })
                }
            </div>
        </div>
    )
}

export default MoviesBlock