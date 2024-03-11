import './FooterList.css'

function FooterList ({props}) {
    return (
        <div className='footer__right-list'>
            <span className='footer__right-list-title'>{props.title}</span>
            <ul>
                {
                    props.listItemText.map(item => {
                        return <li className='footer__right-list-item'><a href='#'>{item}</a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default FooterList