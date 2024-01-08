import MoviesBlock from "../MoviesBlock/MoviesBlock";

function NowPlayingMovies () {
    const options = {
        url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        title: 'Now Playing',
        className: 'now-playing-movies'
    }

    return (
        <MoviesBlock options={options} />
    )
}

export default NowPlayingMovies