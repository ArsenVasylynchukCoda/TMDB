import {useEffect, useState} from "react";
import './LatestTrailers.css'
import {Link} from "react-router-dom";

function LatestTrailers () {
    const [movies, setMovies] = useState([])

    const [movieBg, setMovieBg] = useState('')

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
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

    const changeBg = (newBg) => setMovieBg(newBg)

    return (
        <section className='latest-trailers' style={{backgroundImage: `linear-gradient(to right,rgba(3,37,65,.75) 0%,rgba(3,37,65,.75) 100%), url(${movieBg})`}}>
            <h2 className='latest-trailers__title'>Latest Trailers</h2>
            <div className='latest-trailers__movies-block'>
                {
                    movies && movies.map(elem => {
                        return <div className='latest-trailers__movie' onMouseEnter={() => changeBg(`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`)}>
                            <Link to='#'>
                                <div className='latest-trailers__movie-img'><img
                                    src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`} alt='preview-image'/>
                                </div>
                                <div className='latest-trailers__movie-text'>
                                    <h3 className='latest-trailers__movie-text-title'>{elem.title}</h3>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default LatestTrailers