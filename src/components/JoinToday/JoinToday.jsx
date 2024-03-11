import './JoinToday.css'

function JoinToday () {
    return (
        <div className='join-today'>
            <h2 className='join-today__title'>Join Today</h2>
            <div className='join-today__text-blocks'>
                <div className='join-today__text-block-left'>
                    <p className='join-today__block-text'>Get access to maintain your
                        own <span>custom personal lists</span>, <span>track what you've seen</span> and search and
                        filter for <span>what to watch next</span>—regardless if it's in theatres, on TV or available on
                        popular streaming services like Disney Plus, Netflix, Amazon Prime Video, Apple TV Plus, and
                        FlixOlé.</p>
                    <button type='button' className='join-today__block-button'><a
                        href='https://www.themoviedb.org/signup'>Sign Up</a></button>
                </div>
                <div className='join-today__text-block-right'>
                    <ul className='join-today__block-list'>
                        <li className='join-today__block-list-item'>Enjoy TMDB ad free</li>
                        <li className='join-today__block-list-item'>Maintain a personal watchlist</li>
                        <li className='join-today__block-list-item'>Filter by your subscribed streaming services and find something to watch</li>
                        <li className='join-today__block-list-item'>Log the movies and TV shows you've seen</li>
                        <li className='join-today__block-list-item'>Build custom lists</li>
                        <li className='join-today__block-list-item'>Contribute to and improve our database</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinToday