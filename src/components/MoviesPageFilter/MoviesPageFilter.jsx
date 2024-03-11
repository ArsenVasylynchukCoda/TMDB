import {useEffect, useState} from "react";
import MoviesPageFilterDate from "../MoviesPageFilterDate/MoviesPageFilterDate";
import {dataFilterDate} from '../MoviesPageFilterDate/data'
import {dataAvailabilities, dataReleases} from '../MoviesPageFilterSearchAll/data'
import MoviesPageFilterSearchAll from "../MoviesPageFilterSearchAll/MoviesPageFilterSearchAll";
import MoviesPageFilterGenres from "../MoviesPageFilterGenres/MoviesPageFilterGenres";
import {dataGenres} from "../MoviesPageFilterGenres/data";
import MoviesPageFilterRangeSlider from "../MoviesPageFilterRangeSlider/MoviesPageFilterRangeSlider";
import {dataRuntime, dataScore, dataVoices} from "../MoviesPageFilterRangeSlider/data";
import {useFetch} from "../../hooks/fetch";
import {useDispatch, useSelector} from "react-redux";
import {setMovies} from "../../features/movies/moviesSlice";
import './MoviesPageFilter.css'

function MoviesPageFilter () {
    const dispatch = useDispatch()

    const [availabilities, setAvailabilities] = useState({
        allAv: true, stream: true, free: true, ads: true, rent: true, buy: true
    })

    const [releases, setReleases] = useState({
        allRe: true, 2: true, 3: true, 1: true, 4: true, 5: true, 6: true
    })

    const [date, setDate] = useState({
        from: '',
        to: ''
    })

    const [genres, setGenres] = useState({

    })

    const [score, setScore] = useState([0, 10])

    const [voices, setVoices] = useState(0)

    const [runtime, setRuntime] = useState([0, 405])

    const getGeneres = () => {
        let string = ''
        if (genres) {
            for (const key in genres) {
                string += `${genres[key]},`
            }
        }
        return string
    }

    const getAvailabilities = () => {
        let string = ''
        for (const key in availabilities) {
            if (key === 'allAv') {
                string += ''
            } else if (availabilities[key]) {
                string += `${key},`
            }
        }
        return string
    }

    const getReleaes = () => {
        let string = ''
        for (const key in releases) {
            if (key === 'allRe') {
                string += ''
            } else if (releases[key]) {
                string += `${key},`
            }
        }
        return string
    }

    const url1 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=${date.from}&release_date.lte=${date.to}&sort_by=popularity.desc&vote_average.gte=${score[0]}&vote_average.lte=${score[1]}&vote_count.gte=${voices[0]}&with_genres=${getGeneres()}&with_runtime.gte=${runtime[0]}&with_runtime.lte=${runtime[1]}&with_watch_monetization_types=${getAvailabilities()}&with_release_type=${getReleaes()}`

    const {data: searchedMovies} = useFetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=${date.from}&release_date.lte=${date.to}&sort_by=popularity.desc&vote_average.gte=${score[0]}&vote_average.lte=${score[1]}&vote_count.gte=${voices[0]}&with_genres=${getGeneres()}&with_runtime.gte=${runtime[0]}&with_runtime.lte=${runtime[1]}&with_watch_monetization_types=${getAvailabilities()}&with_release_type=${getReleaes()}`)
    console.log(url1)
    useEffect( () => {
        const fetch = require('node-fetch');
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&release_date.gte=${date.from}&release_date.lte=${date.to}&sort_by=popularity.desc&vote_average.gte=${score[0]}&vote_average.lte=${score[1]}&vote_count.gte=${voices[0]}&with_genres=${getGeneres()}&with_runtime.gte=${runtime[0]}&with_runtime.lte=${runtime[1]}&with_watch_monetization_types=${getAvailabilities()}&with_release_type=${getReleaes()}`;
        console.log(url)
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => dispatch(setMovies(json)))
            .catch(err => console.error('error:' + err));
    }, []);

    return (
        <section className='movies-page-block__filter'>
            <div className='movies-page__filter-title-block'>
                <h2 className='movies-page__filter-title'><a href='#'>Sort</a></h2>
                <h2 className='movies-page__filter-title'><a href='#'>Where to watch</a></h2>
                <h2 className='movies-page__filter-title'><a href='#'>Filter</a></h2>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Show Me</span>
                    <div className='movies-page__filter-item-show-me movies-page__filter-item-show-search'>
                        <div>
                            <input type='radio' id='everything' name='show-me' defaultChecked={true}/>
                            <label htmlFor='everything'>Everything</label>
                        </div>

                        <div>
                            <input type='radio' id='haventseen' name='show-me'/>
                            <label htmlFor='haventseen'>Movies I Haven't Seen</label>
                        </div>

                        <div>
                            <input type='radio' id='seen' name='show-me'/>
                            <label htmlFor='seen'>Movies I Have Seen</label>
                        </div>
                    </div>
                </div>
                <div className='movies-page__filter-item'>
                <span className='movies-page__filter-item-title'>Availabilities</span>
                    <div className='movies-page__filter-item-search movies-page__filter-item-show-search'>
                        <input type='checkbox' id='availabilities' defaultChecked={true} onClick={() => {
                            const updatedValue = {allAv: !availabilities.allAv}
                            if (updatedValue.allAv === true) {
                                for (const key in availabilities) {
                                    updatedValue[key] = true
                                }
                            }
                            return setAvailabilities(prevValue => ({...prevValue, ...updatedValue}))
                        }}/>
                        <label htmlFor='availabilities'>Search all
                            availabilities?</label>
                        {
                            !availabilities.allAv ? (
                                dataAvailabilities && dataAvailabilities.map(elem => {
                                    return <MoviesPageFilterSearchAll props={elem} obj={availabilities}
                                                                      setObj={setAvailabilities}/>
                                })
                            ) : null
                        }
                    </div>
                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Release Date</span>
                    <div className='movies-page__filter-item-search movies-page__filter-item-show-search'>
                        <input type='checkbox' id='releases' defaultChecked={true} onClick={() => {
                            const updatedValue = {allRe: !releases.allRe}
                            if (updatedValue.allRe === true) {
                                for (const key in releases) {
                                    updatedValue[key] = true
                                }
                            }
                            return setReleases(prevValue => ({...prevValue, ...updatedValue}))
                        }}/>
                        <label htmlFor='releases'>Search all
                            releases?</label>
                        {
                            !releases.allRe ? (
                                dataReleases && dataReleases.map(elem => {
                                    return <MoviesPageFilterSearchAll props={elem} obj={releases}
                                                                      setObj={setReleases}/>
                                })
                            ) : null
                        }
                    </div>
                    <div className='movies-page__filter-item-date'>
                        {
                            dataFilterDate && dataFilterDate.map(elem => {
                                return <MoviesPageFilterDate props={elem} setObj={setDate}/>
                            })
                        }
                    </div>
                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Genres</span>
                    <ul className='movies-page__filter-item-generes'>
                        {
                            dataGenres && dataGenres.map(elem => {
                                return <MoviesPageFilterGenres props={elem} setObj={setGenres} obj={genres}/>
                            })
                        }
                    </ul>
                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Certification</span>

                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>User Score</span>
                    {
                        dataScore && <MoviesPageFilterRangeSlider props={dataScore} setNums={setScore}/>
                    }
                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Minimum User Votes</span>
                    {
                        dataVoices && <MoviesPageFilterRangeSlider props={dataVoices} setNums={setVoices}/>
                    }
                </div>
                <div className='movies-page__filter-item'>
                    <span className='movies-page__filter-item-title'>Runtime</span>
                    {
                        dataRuntime && <MoviesPageFilterRangeSlider props={dataRuntime} setNums={setRuntime}/>
                    }
                </div>
                <button type='submit' className='movies-page__filter-btn' onClick={() => (dispatch(setMovies(searchedMovies)))}>Search</button>
            </form>
        </section>
    )
}

export default MoviesPageFilter