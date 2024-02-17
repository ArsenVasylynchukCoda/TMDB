import SearchPageMovie from "../SearchPageMovie/SearchPageMovie";
import './SearchPageMovies.css'

function SearchPageMovies ({searchedMovies}) {
    return (
        <div className='search-page-movies'>
            {
                searchedMovies && searchedMovies.map(movie => <div className='search-page-movies__movie' key={movie.id}><SearchPageMovie movie={movie}/></div>)
            }
        </div>
    )
}

export default SearchPageMovies