import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchPageSearchedMovies.css'

function SearchPageSearchedMovies ({searchedMovies, setShowList, value, refInput}) {
    useEffect(() => {
        if (searchedMovies.length) {
            setShowList(true)
        }
    }, [value])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (refInput.current.inputElement && !refInput.current.inputElement.contains(event.target)) {
                setShowList(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    }, [])

    console.log(refInput)

    return (
        <div className="search-page-searched-movies">
            <ul className="search-page-searched-movies__list">
                {searchedMovies.map(elem => {
                    return <li className="search-page-searched-movies__list-item" key={elem.id}>
                        <Link target="_blank" to="https://www.npmjs.com/package/lodash"><FontAwesomeIcon icon={faMagnifyingGlass} size='lg'/><img
                            src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt="movie-banner"/>{elem.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default  SearchPageSearchedMovies