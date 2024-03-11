import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SearchedMovies = ({ searchedMovies, setShowList, value, refInput }) => {


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

    return (
        <div className="searched-movies">
            <ul className="searched-movies__list">
                {searchedMovies.map(elem => {
                    return <li className="searched-movies__list-item" key={elem.id}>
                        <Link target="_blank" to="https://www.npmjs.com/package/lodash">&#128269;<img
                            src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt="movie-banner"/>{elem.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SearchedMovies