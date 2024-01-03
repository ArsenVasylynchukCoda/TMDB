import {useEffect, useState} from "react";
import './Movie.css'

function Movie ({id}, {className}) {
    const [movie, setMovie] = useState({})

    const releaseDate = new Date(movie.release_date).toDateString()

    const votePercent = Math.floor(movie.vote_average * 10)

    const generatePercentCircle = () => {
        if (votePercent >= 70) {
            return(
                <>
                    <circle cx="15" cy="15" r="15" stroke='#204529' strokeDashoffset='0'></circle>
                    <circle cx="15" cy="15" r="15" stroke='#21cb77'
                            strokeDashoffset={95 - (95 * votePercent) / 100}></circle>
                </>
            )
        } else {
            return (
                <>
                    <circle cx="15" cy="15" r="15" stroke='#313315' strokeDashoffset='0'></circle>
                    <circle cx="15" cy="15" r="15" stroke='#d2d531'
                            strokeDashoffset={95 - (95 * votePercent) / 100}></circle>
                </>
            )
        }
    }

    useEffect(() => {
        const fetch = require('node-fetch');

        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovie(json))
            .catch(err => console.error('error:' + err));
    }, [id]);

    return (
        <div className={`${className}__movie movie`}>
            <div className={`${className}__movie-banner movie__banner`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=''/>
                <div className={`${className}__rating movie__rating`}>
                        <svg>
                            {generatePercentCircle()}
                        </svg>
                    <div className='movie__rating-percent'>{votePercent}<span>%</span></div>
                </div>
            </div>
            <div className='movie__text-block movie__text-block'>
                <h4 className={`${className}__movie-title movie__title`}><span className={`${className}__movie-title-link movie__title-link`}>{movie.original_title}</span></h4>
                <time className={`${className}__movie-date movie__date`}>{releaseDate}</time>
            </div>
        </div>
    )
}

export default Movie