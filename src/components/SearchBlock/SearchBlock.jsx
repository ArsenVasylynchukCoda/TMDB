import './SearchBlock.css'
import { useCallback, useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import debounce from 'lodash/debounce';

function SearchBlock () {

    const [value, setValue] = useState('');

    const onInputChange = (inputValue) => {
        console.log(inputValue)
        const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setSearchedMovies(json.results))
            .catch(err => console.error('error:' + err));
    }

    const debounceFn = useCallback(debounce(onInputChange, 1000), []);

    function handleChange (event) {
        setValue(event.target.value);
        debounceFn(event.target.value);
    };

    const [searchedMovies, setSearchedMovies] = useState([])

    return (
        <section className="search">
            <h1 className="search__title">Welcome.</h1>
            <h2 className="search__sub-title">Millions of movies, TV shows and people to discover. Explore now.</h2>
            <div className="search__block">
                <input
                    value={value}
                    className="search__block-input"
                    type="text"
                    placeholder="Search for a movie, tv show, person......"
                    onChange={handleChange}
                />
                <button className="search__block-btn">Search</button>
            </div>
            {
                searchedMovies &&
                <div className='searched-movies'>
                    <ul className='searched-movies__list'>
                        {searchedMovies.map(elem => {
                            return <li className='searched-movies__list-item'><Link to='#'>&#128269;<img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt='movie-banner' />{elem.title}
                            </Link></li>
                        })}
                    </ul>
                </div>
            }
        </section>
    )
}

export default SearchBlock