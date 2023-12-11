function Banner () {
    return (
        <div className="banner">
            <h1 className="banner__title">Welcome.</h1>
            <h2 className="banner__sub-title">Millions of movies, TV shows and people to discover. Explore now.</h2>
            <div className="banner__search">
                <input className="banner__search-input" type="text" placeholder="Search for a movie, tv show, person......" />
                <button className="banner__search-btn">Search</button>
            </div>
        </div>
    )
}

export default Banner