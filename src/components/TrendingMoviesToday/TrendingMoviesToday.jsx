import './TrendingMoviesToday.css'
import MoviesBlock from "../MoviesBlock/MoviesBlock";

function TrendingMoviesToday() {

    const options = {
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page1',
        title: 'Trending',
        className: 'trending-movies'
    }


    return (
        <MoviesBlock options={options} />
    )
}

export default TrendingMoviesToday