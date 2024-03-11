import {useEffect, useState} from "react";
import './MoviesPageFilterDate.css'

function MoviesPageFilterDate ({props, setObj}) {
    const [value, setValue] = useState(props.value)
    useEffect(() => {
        const updatedValue = {[props.text]: value}
        return  setObj(prevValue => ({...prevValue, ...updatedValue}))
    }, []);

    return (
        <div className='movies-page__filter-date-item'>
            <label>{props.text}</label>
            <input type='date' onChange={(e) => {
                setValue(e.target.value)
                const updatedValue = {[props.text]: e.target.value}
                setObj(prevValue => ({...prevValue, ...updatedValue}))
            }} value={value}/>
        </div>
    )
}

export default MoviesPageFilterDate