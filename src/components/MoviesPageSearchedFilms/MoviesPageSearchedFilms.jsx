import {useSelector} from "react-redux";
import Movie from "../Movie/Movie";
import './MoviesPageSearchedFilms.css'

function MoviesPageSearchedFilms () {
    const searchedMovies = useSelector((state) => state.movies.value)

    return (
        <section className='movies-page__searched-movies'>
            {
                searchedMovies.results && searchedMovies.results.map(elem => {
                    return <div className={'movies-page__searched-movie'}>
                        <Movie id={elem.id} className='movies-page__searched-movie' />
                    </div>
                })
            }
        </section>
    )
}

export default MoviesPageSearchedFilms