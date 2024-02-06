import SearchPageField from "../components/SearchPageField/SearchPageField";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

function SearchPage ({oldValue, setOldValue}) {

    return (
        <>
            <SearchPageField oldValue={oldValue} setOldValue={setOldValue}/>
        </>
    )
}

export default SearchPage