import SearchPageField from "../components/SearchPageField/SearchPageField";
import Header from "../components/Header/Header";
import {useState} from "react";
import SearchPageMovies from "../components/SearchPageMovies/SearchPageMovies";

function SearchPage ({oldValue, setOldValue}) {
    const [searchedMovies, setSearchedMovies] = useState([])
    console.log(searchedMovies)

    return (
        <>
            <Header />
            <SearchPageField oldValue={oldValue} setOldValue={setOldValue} setSearchedMovies={setSearchedMovies}/>
            <SearchPageMovies searchedMovies={searchedMovies} />
        </>
    )
}

export default SearchPage