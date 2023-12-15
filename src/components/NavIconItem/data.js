import Plus from "../../assets/img/icons/Plus";

export const dataIconMenu = [
    {
        id: 'plus',
        label: <Plus />,
        params: {
            width: '30px'
        },
        children: [
            {name: 'Add New Movie', id: 'addNewMovie', path: '/'},
            {name: 'Add New TV Show', id: 'addNewTvShow', path: '/'}
        ]
    },
    {
        id: 'avatar',
        label: 'A',
        params: {
            background: '#D29001',
            width: '32px',
            height: '32px',
            fontSize: '14px'
        },
        children: [
            {name: 'Profile and Settings', id: ''}
        ]
    }
];