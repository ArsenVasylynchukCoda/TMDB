import {useEffect, useState} from "react";
import Movie from "../Movie/Movie";
import './MoviesBlock.css';

function MoviesBlock({inf}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetch = require('node-fetch');

        const url = inf.url;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error('error:' + err));
    }, []);

    console.log(movies)

    return (
        <div className={`${inf.className} movies`}>
            <h3 className={`${inf.className}__title movies__title`}>{inf.title}</h3>
            <div className={`${inf.className}__block movies__block`}>
                {
                    movies && movies.map(movie => {
                        return <Movie id={movie.id} className={inf.className}/>
                    })
                }
            </div>
        </div>
    )
}

export default MoviesBlock