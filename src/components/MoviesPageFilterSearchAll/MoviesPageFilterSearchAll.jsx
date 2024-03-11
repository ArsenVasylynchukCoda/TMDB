function MoviesPageFilterSearchAll ({props, setObj, obj}) {


    return (
        <div className='movies-page__filter-search-item'>
            <input type='checkbox' id={`${props.textId}`} defaultChecked={true} onClick={() => {
                const updatedValue = {[props.id]: !obj[props.id]}
                return setObj(prevValue => ({...prevValue, ...updatedValue}))
            }}/>
            <label htmlFor={props.textId}>{props.text}</label>
        </div>
    )
}

export default MoviesPageFilterSearchAll