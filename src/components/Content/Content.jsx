import LatestTrailers from "../LatestTrailers/LatestTrailers";
import TrendingMoviesToday from "../TrendingMoviesToday/TrendingMoviesToday";
import PopularMovies from "../PopularMovies/PopularMovies";
import NowPlayingMovies from "../NowPlayingMovies/NowPlayingMovies";

function Content () {
    return (
        <main className="content">
            <TrendingMoviesToday />
            <LatestTrailers />
            <PopularMovies />
            <NowPlayingMovies />
        </main>
    )
}

export default Content