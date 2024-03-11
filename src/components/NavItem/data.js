export const dataMenu = [
    {
        id: 'movie',
        label: 'Movie',
        params: {
            color: '#fff'
        },
        children: [
            {name: 'Popular', id: 'popular', path: '/movies'},
            {name: 'Now Playing', id: 'nowPlaying', path: '/'},
            {name: 'Upcoming', id: 'upcoming', path: '/'},
            {name: 'Top Rated', id: 'topRated', path: '/'},
        ]
    },
    {
        id: 'tvShows',
        label: 'TV Shows',
        params: {
            color: '#fff'
        },
        children: [
            {name: 'Popular', id: 'popular', path: '/'},
            {name: 'Airing Today', id: 'airingToday', path: '/'},
            {name: 'On TV', id: 'onTv', path: '/'},
            {name: 'Top Rated', id: 'topRated', path: '/'},
        ]
    },
    {
        id: 'people',
        label: 'People',
        params: {
            color: '#fff'
        },
        children: [
            {name: 'Popular People', id: 'popularPeople', path: '/'}
        ]
    },
    {
        id: 'more',
        label: 'More',
        params: {
            color: '#fff'
        },
        children: [
            {name: 'Discussions', id: 'discussions', path: '/'},
            {name: 'Leaderboard', id: 'leaderboard', path: '/'},
            {name: 'Support', id: 'support', path: '/'},
            {name: 'API', id: 'api', path: '/'},
        ]
    }
]