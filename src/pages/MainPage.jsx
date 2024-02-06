import SearchBlock from '../components/SearchBlock/SearchBlock'
import Header from '../components/Header/Header'
import TrendingMoviesToday from "../components/TrendingMoviesToday/TrendingMoviesToday";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import NowPlayingMovies from "../components/NowPlayingMovies/NowPlayingMovies";
import { useFetch } from '../hooks/debounce'
import Content from "../components/Content/Content";
import SearchPageField from "../components/SearchPageField/SearchPageField";

function MainPage({searchValue, setSearchValue}) {
    const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
    return (
        <>
            <Header />
            <SearchBlock searchValue={searchValue} setSearchValue={setSearchValue} />
            <Content />
        </>
    )
}

export default MainPage