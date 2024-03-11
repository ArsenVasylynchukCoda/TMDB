import SearchPageField from "../components/SearchPageField/SearchPageField";
import Header from "../components/Header/Header";
import {useState} from "react";
import SearchPageMovies from "../components/SearchPageMovies/SearchPageMovies";

function SearchPage () {
    const [searchedMovies, setSearchedMovies] = useState([])
    console.log(searchedMovies)

    return (
        <>
            <Header />
            <SearchPageField setSearchedMovies={setSearchedMovies}/>
            <SearchPageMovies searchedMovies={searchedMovies} />
        </>
    )
}

export default SearchPage