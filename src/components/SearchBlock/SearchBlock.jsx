import './SearchBlock.css'

function SearchBlock () {
    return (
        <section className="search">
            <h1 className="search__title">Welcome.</h1>
            <h2 className="search__sub-title">Millions of movies, TV shows and people to discover. Explore now.</h2>
            <div className="search__block">
                <input className="search__block-input" type="text" placeholder="Search for a movie, tv show, person......" />
                <button className="search__block-btn">Search</button>
            </div>
        </section>
    )
}

export default SearchBlock