import './MoviesPageFilterGeneres.css'

function MoviesPageFilterGenres ({props, obj, setObj}) {
    return (
        <li className='movies-page__filter-item-generes'><button type='button' onClick={(e) => {
            if (!obj[props.id]) {
                const updatedValue = {[props.id]: props.genId}
                setObj(prevValue => ({...prevValue, ...updatedValue}))
            } else {
                const newObj = obj
                delete newObj[props.id]
                setObj({...newObj})
            }
            e.target.classList.toggle('active')
        }}>{props.text}</button></li>
    )
}

export default MoviesPageFilterGenres