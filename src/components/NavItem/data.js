export const dataMenu = [
    {
        id: 'movie',
        label: 'Movie',
        params: {
            color: '#fff'
        },
        children: [
            {name: 'Popular', id: 'popular', path: '/'},
            {name: 'Now Playing', id: 'nowPlaying', path: '/'},
            {name: 'Upcoming', id: 'upcoming', path: '/'},
            {name: 'Top Rated', id: 'topRated', path: '/'},
        ]
    },
    {
        id: 'tvShows',
        label: 'TV Shows',
        children: [
            {name: 'Popular', id: 'popular', path: '/'},
            {name: 'Now Playing', id: 'nowPlaying', path: '/'},
            {name: 'Upcoming', id: 'upcoming', path: '/'},
            {name: 'Top Rated', id: 'topRated', path: '/'},
        ]
    }
]