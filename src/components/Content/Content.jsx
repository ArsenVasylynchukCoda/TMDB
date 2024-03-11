import LatestTrailers from "../LatestTrailers/LatestTrailers";
import TrendingMoviesToday from "../TrendingMoviesToday/TrendingMoviesToday";
import PopularMovies from "../PopularMovies/PopularMovies";
import NowPlayingMovies from "../NowPlayingMovies/NowPlayingMovies";
import JoinToday from "../JoinToday/JoinToday";
import Leaderboard from "../Leaderboard/Leaderboard";
import Footer from "../Footer/Footer";

function Content () {
    return (
        <main className="content">
            <TrendingMoviesToday />
            <LatestTrailers />
            <PopularMovies />
            <NowPlayingMovies />
            <JoinToday />
            <Leaderboard />
            <Footer />
        </main>
    )
}

export default Content