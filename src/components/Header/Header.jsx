import { Link } from 'react-router-dom'
import Plus from '../../assets/img/icons/Plus'
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiButtonIcon,
    EuiHeaderSectionItemButton,
    useEuiBackgroundColorCSS,
    EuiPopover,
} from '@elastic/eui'
import './Header.css'
import { useState } from 'react'
import { dataMenu } from '../NavItem/data'
import NavItem from '../NavItem/NavItem'
import {useFetch} from "../../hooks/fetch";

function Header() {
    const colorStyles = useEuiBackgroundColorCSS()
    const cssStyles = [colorStyles['#032541']]

    const { loading } = useFetch('https://jsonplaceholder.typicode.com/posts', 'POST', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })

    const [isPopoverOpen, setIsPopoverOpen] = useState({
        plus: false,
        bell: false,
        profile: false,
    })

    const handeOpenPopover = (type) => () => setIsPopoverOpen(preValue => ({...preValue, [type]: !preValue[type]}))

    const handeClosePopover = (type) => () => setIsPopoverOpen(preValue => ({...preValue, [type]: false}))

    const sections = [
        {
            items: [
                <Link to={'/'}><EuiHeaderLogo
                    iconType="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                /></Link>,
                <EuiHeaderLinks aria-label="App navigation dark theme example">
                    {dataMenu.map(item => {
                        return (
                            <div className="header__list-item" key={item.id}><NavItem name={item.label} popoverMenu={item.children} params={item.params}/></div>
                        )
                    })}
                </EuiHeaderLinks>
            ]
        }, {
            items: [
                <EuiHeaderSectionItemButton className="header__plus-btn" style={{ width: '40px' }}>
                    <EuiPopover
                        color="#ffffff"
                        button={
                            <EuiButtonIcon
                                className="header__plus-btn-icon"
                                isDisabled={false}
                                size="xs"
                                onClick={handeOpenPopover('plus')}
                                iconType={Plus}
                            />
                    }
                        isOpen={isPopoverOpen.plus}
                        closePopover={handeClosePopover('plus')}
                    >
                            <ul className="header__list-item-popover-list header__plus-list">
                                <li className='header__plus-list-item'><Link to={'/'} className='header__list-item-popover-list-link header__plus-list-item-link'>Add New Movie</Link></li>
                                <li className='header__plus-list-item'><Link to={'/'} className='header__list-item-popover-list-link header__plus-list-item-link'>Add New TV Show</Link></li>
                            </ul>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
            ],
        },]

    return (
        <header className="header" style={{color: '#fff'}}>
            {loading ? 'LOADING...' : <EuiHeader className="header__block" theme="dark" sections={sections} css={cssStyles}/>}
        </header>
    )
}

export default Header