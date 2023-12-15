import { Link } from 'react-router-dom'
import Plus from '../../assets/img/icons/Plus'
import Bell from '../../assets/img/icons/Bell'
import Search from '../../assets/img/icons/Search'
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiButtonIcon,
    EuiHeaderSectionItemButton,
    EuiBadge,
    EuiIcon,
    EuiAvatar,
    useEuiTheme,
    useEuiBackgroundColorCSS,
    hasShadow,
    color,
    hasBorder,
    EuiPopover,
    EuiText,
    EuiButtonEmpty
} from '@elastic/eui'
import './Header.css'
import { useState } from 'react'
import { dataMenu } from '../NavItem/data'
import NavItem from '../NavItem/NavItem'

function Header() {
    const { euiTheme } = useEuiTheme()
    const colorStyles = useEuiBackgroundColorCSS()
    const cssStyles = [colorStyles['#032541']]

    const [plusOpenPopover, setPlusOpenPopover] = useState(false)
    const plusOpenPopoverFunc = () => {
        setPlusOpenPopover(prevValue => !prevValue)
    }
    const plusClosePopoverFunc = () => setPlusOpenPopover(false)

    const [bellOpenPopover, setBellOpenPopover] = useState(false)
    const bellOpenPopoverFunc = () => {
        setBellOpenPopover(prevValue => !prevValue)
    }
    const bellClosePopoverFunc = () => setBellOpenPopover(false)

    const [profileOpenPopover, setProfileOpenPopover] = useState(false)

    const profileOpenPopoverFunc = () => {
        setProfileOpenPopover(prevValue => !prevValue)
    }
    const profileClosePopoverFunc = () => setProfileOpenPopover(false)

    const sections = [
        {
            items: [
                <EuiHeaderLogo
                    iconType="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                />,
                <EuiHeaderLinks aria-label="App navigation dark theme example">
                    {dataMenu.map(item => {
                        return (
                            <NavItem key={item.id} name={item.label} popoverMenu={item.children} params={item.params}/>
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
                                onClick={plusOpenPopoverFunc}
                                iconType={Plus}
                            />
                    }
                        isOpen={plusOpenPopover}
                        closePopover={plusClosePopoverFunc}
                    >
                        <div>
                            <ul className="header__list-item-popover-list header__plus-list">
                                <li className='header__plus-list-item'><Link to={'/'} className='header__list-item-popover-list-link header__plus-list-item-link'>Add New Movie</Link></li>
                                <li className='header__plus-list-item'><Link to={'/'} className='header__list-item-popover-list-link header__plus-list-item-link'>Add New TV Show</Link></li>
                            </ul>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton className="header__language-btn"><Link
                    to={'/'}>en</Link></EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton className="header__bell-btn">
                    <EuiPopover
                        color="#ffffff"
                        button={
                            <EuiButtonIcon
                                className="header__plus-btn-icon"
                                isDisabled={false}
                                size="xs"
                                onClick={bellOpenPopoverFunc}
                                iconType={Bell}
                            />}
                        isOpen={bellOpenPopover}
                        closePopover={bellClosePopoverFunc}
                    >
                        <div className="header__bell-btn-popover">
                            <h4 className="header__bell-btn-popover-title">Unread Notifications <span>0</span></h4>
                            <p className="header__bell-btn-popover-text">Good job! Looks like you're all caught
                                up. <Link to={'/'}>View All</Link></p>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton
                    aria-label="Account menu">
                    <EuiPopover
                        button={
                            <EuiButtonEmpty
                                className="header__profile-btn-icon"
                                isDisabled={false}
                                onClick={profileOpenPopoverFunc}
                            >
                                <EuiAvatar name="Arsenii Vasylynchuk" size="m"/>
                            </EuiButtonEmpty>}
                        isOpen={profileOpenPopover}
                        closePopover={profileClosePopoverFunc}
                    >
                        <div className="header__profile-btn-popover">
                            <p className="header__profile-btn-popover-text">Profile and Settings</p>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
            ],
        },]

    return (
        <header className="header">
            <EuiHeader className="header__block" theme="dark" sections={sections} css={cssStyles}/>
        </header>
    )
}

export default Header