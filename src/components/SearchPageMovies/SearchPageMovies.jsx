import SearchPageMovie from "../SearchPageMovie/SearchPageMovie";
import './SearchPageMovies.css'

function SearchPageMovies ({searchedMovies}) {
    return (
        <div className='search-page-movies'>
            {
                searchedMovies && searchedMovies.map(movie => <SearchPageMovie movie={movie} />)
            }
        </div>
    )
}

export default SearchPageMovies