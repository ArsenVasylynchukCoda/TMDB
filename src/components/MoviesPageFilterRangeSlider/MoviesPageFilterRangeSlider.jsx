import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {useEffect} from "react";
import './MoviesPageFilterRangeSlider.css'

function MoviesPageFilterRangeSlider ({props, setNums}) {
    useEffect(() => {
        setNums(props.defaultValue)
    }, []);

    return (
        <div className='movies-page__filter-item-range'>
            <ul className='movies-page__filter-range-list'>
                {
                    props.inputs && props.inputs.map(e => e)
                }
            </ul>
            <RangeSlider className={props.className} min={props.min} step={props.step} max={props.max} defaultValue={props.defaultValue} onInput={(e) => setNums(e)} />
        </div>
    )
}

export default MoviesPageFilterRangeSlider