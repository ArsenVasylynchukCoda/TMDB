import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import './SearchPageField.css'
import SearchPageSearchedMovies from '../SearchPageSearchedMovies/SearchPageSearchedMovies'
import {EuiFieldSearch} from "@elastic/eui";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {setByValue} from "../../features/search/searchSlice";

function SearchPageField({setSearchedMovies }) {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('query'))
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.search.value)
    const [value, setValue] = useState(searchValue || searchParams.get('query'))
    const oldSearchValue = () => {
        const fetch = require('node-fetch')

        const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(json => setSearchedMovies(json.results))
            .catch(err => console.error('error:' + err))
    }

    useEffect(() => {
        dispatch(setByValue(searchParams.get('query')))
        oldSearchValue()
    }, [])

    const [popupMovies, setPopupMovies] = useState([])
    const [showList, setShowList] = useState(false)

    const getSearchedMovies = (inputValue) => {
        setShowList(true)

        const fetch = require('node-fetch')

        const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmNkY2UyYzU3YzQ3Mjk2OTNkNDM3YzFhOTI4ZDBkZSIsInN1YiI6IjY1NWUxMDc2ZDM5OWU2MDEyZTAyMDNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hq98-Bxaonwz4cniOcrJB9s78VM-TqgWaWrKIUkvy90'
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(json => setPopupMovies(json.results))
            .catch(err => console.error('error:' + err))
    }

    const debounceFn = useCallback(debounce(getSearchedMovies, 1000), [])

    function handleChange(event) {
        setValue(event.target.value)
        debounceFn(event.target.value)
    }

    const refInput = useRef()
    const setMovies = (e) => {
        e.preventDefault()
        setSearchedMovies(popupMovies)
    }

    return (
        <div className="search-page-field">
            <form onSubmit={setMovies}>
                <EuiFieldSearch
                    ref={refInput}
                    name="query"
                    placeholder="Search for a movie, tv show, person..."
                    value={value}
                    onFocus={() => {
                        setShowList(true)
                    }}
                    onChange={handleChange}
                />
                {/*<button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></button>*/}
                {/*<input*/}
                {/*    ref={refInput}*/}
                {/*    type="text"*/}
                {/*    name="query"*/}
                {/*    placeholder="Search for a movie, tv show, person..."*/}
                {/*    value={value}*/}
                {/*    onChange={handleChange}*/}
                {/*    onFocus={() => {*/}
                {/*        setShowList(true)*/}
                {/*    }}*/}
                {/*/>*/}
            </form>
            {
                popupMovies && showList && (
                    <SearchPageSearchedMovies searchedMovies={popupMovies} value={value} refInput={refInput}
                                              setShowList={setShowList}/>
                )
            }
        </div>

    )
}

export default SearchPageField