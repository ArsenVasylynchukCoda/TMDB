import MoviesPageFilter from "../MoviesPageFilter/MoviesPageFilter";
import MoviesPageSearchedFilms from "../MoviesPageSearchedFilms/MoviesPageSearchedFilms";
import './MoviesPageContent.css'

function MoviesPageContent () {
    return (
        <main className='movies-page-content'>
            <h1 className='movies-page__title'>Popular Movies</h1>
            <div className='movies-page-block'>
                <MoviesPageFilter />
                <MoviesPageSearchedFilms />
            </div>
        </main>
    )
}

export default MoviesPageContent