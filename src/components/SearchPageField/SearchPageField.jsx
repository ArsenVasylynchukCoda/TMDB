import {useCallback, useEffect, useRef, useState} from "react";
import debounce from "lodash/debounce";
import {useFetch} from "../../hooks/fetch";

function SearchPageField ({oldValue, setOldValue}) {
    console.log(oldValue)
    const [value, setValue] = useState(oldValue)

    function handleChange(event) {
        setValue(event.target.value)
        // debounceFn(event.target.value)
    }

    // const [searchedMovies, setSearchedMovies] = useState([])
    // const refInput = useRef()
    //
    // setSearchedMovies(useFetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`).data)
    // console.log(searchedMovies)
    //
    // const debounceFn = useCallback(debounce(handleChange, 1000), [])

    return (
        <form className='search-page-field'><input type='text' name='query' value={value} onChange={handleChange}/></form>
    )
}

export default SearchPageField