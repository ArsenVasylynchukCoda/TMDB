import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchedMovies = ({ searchedMovies, setShowList, value, refInput }) => {

    const ref = useRef()

    useEffect(() => {
        if (searchedMovies.length) {
            console.log('asd')
            setShowList(true)
        }
    }, [value])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
            // if (refInput.current.classList.value !== 'searched-movies') {
                console.log('Закриття вікна')
                setShowList(false)

            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    }, [])

    return (
        <div className="searched-movies" ref={ref}>
            <ul className="searched-movies__list">
                {searchedMovies.map(elem => {
                    return <li className="searched-movies__list-item"><Link to="#">&#128269;<img
                        src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt="movie-banner"/>{elem.title}
                    </Link></li>
                })}
            </ul>
        </div>
    )
}

export default SearchedMovies