import MoviesBlock from "../MoviesBlock/MoviesBlock";

function PopularMovies () {
    const options = {
        url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        title: 'Popular',
        className: 'popular-movies'
    }

    return (
        <MoviesBlock inf={options} />
    )
}

export default PopularMovies