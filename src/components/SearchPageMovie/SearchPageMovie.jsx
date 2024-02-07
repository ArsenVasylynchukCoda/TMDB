import './SearchPageMovie.css'
import {Link} from "react-router-dom";

function SearchPageMovie ({movie}) {
    const movieDate = new Date(movie.release_date).toDateString()

    return (
        <div className='search-page-movies__movie'>
            <div className='search-page-movies__movie-img'><Link to='/'><img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></Link></div>
            <div className='search-page-movies__movie-text-block'>
                <h3 className='search-page-movies__movie-title'><Link to='/'>{movie.title}</Link></h3>
                <time className='search-page-movies__movie-date'>{movieDate}</time>
                <p className='search-page-movies__movie-text'>{movie.overview ? (movie.overview) : null}</p>
            </div>
        </div>
    )
}

export default SearchPageMovie