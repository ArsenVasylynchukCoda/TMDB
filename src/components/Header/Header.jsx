import { Link } from "react-router-dom";
import Plus from '../../assets/img/icons/Plus'
import Bell from "../../assets/img/icons/Bell";
import Search from "../../assets/img/icons/Search";
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
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
} from '@elastic/eui';
import './Header.css'
import { useState } from "react";

function Header() {
    const { euiTheme } = useEuiTheme();
    const colorStyles = useEuiBackgroundColorCSS();
    const cssStyles = [colorStyles['#032541']];

    const [moviesOpenPopover, setMoviesOpenPopover] = useState(false)

    const [tvShowsOpenPopover, setTvShowsOpenPopover] = useState(false)

    const [peopleOpenPopover, setPeopleOpenPopover] = useState(false)

    const [moreOpenPopover, setMoreOpenPopover] = useState(false)

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

    const sections = [
        {
            items: [
                <EuiHeaderLogo iconType="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"></EuiHeaderLogo>,
                <EuiHeaderLinks aria-label="App navigation dark theme example">
                    <EuiHeaderLink className="header__list-item"
                        onMouseEnter={() => {
                            setMoviesOpenPopover(true)
                        }}
                        onMouseLeave={() => {
                            setMoviesOpenPopover(false)
                        }}>
                        <EuiPopover
                            className="header__list-item-popover"
                            button={
                                <EuiButtonEmpty
                                    className='header__list-item'
                                    isDisabled={false}
                                    color="#ffffff"
                                >
                                    Movies
                                </EuiButtonEmpty>}
                            isOpen={moviesOpenPopover}
                        >
                            <div>
                                <ul className="header__list-item-popover-list">
                                    <li><Link to={'/'}>Popular</Link></li>
                                    <li><Link to={'/'}>Now Playing</Link></li>
                                    <li><Link to={'/'}>Upcoming</Link></li>
                                    <li><Link to={'/'}>Top Rated</Link></li>
                                </ul>
                            </div>
                            {/* <EuiText style={{ width: 300 }}>
                                <p>Popover content that&rsquo;s wider than the default width</p>
                            </EuiText> */}
                        </EuiPopover>
                    </EuiHeaderLink>
                    <EuiHeaderLink className="header__list-item"
                        onMouseEnter={() => {
                            setTvShowsOpenPopover(true)
                        }}
                        onMouseLeave={() => {
                            setTvShowsOpenPopover(false)
                        }}>
                        <EuiPopover
                            className="header__list-item-popover"
                            button={
                                <EuiButtonEmpty
                                    className='header__list-item'
                                    isDisabled={false}
                                    color="#ffffff"
                                >
                                    TV Shows
                                </EuiButtonEmpty>}
                            isOpen={tvShowsOpenPopover}
                        >
                            <div>
                                <ul className="header__list-item-popover-list">
                                    <li><Link to={'/'}>Popular</Link></li>
                                    <li><Link to={'/'}>Airing Today</Link></li>
                                    <li><Link to={'/'}>On TV</Link></li>
                                    <li><Link to={'/'}>Top Rated</Link></li>
                                </ul>
                            </div>
                        </EuiPopover>
                    </EuiHeaderLink>
                    <EuiHeaderLink className="header__list-item"
                        onMouseEnter={() => {
                            setPeopleOpenPopover(true)
                        }}
                        onMouseLeave={() => {
                            setPeopleOpenPopover(false)
                        }}>
                        <EuiPopover
                            className="header__list-item-popover"
                            button={
                                <EuiButtonEmpty
                                    className='header__list-item'
                                    isDisabled={false}
                                    color="#ffffff"
                                >
                                    People
                                </EuiButtonEmpty>}
                            isOpen={peopleOpenPopover}
                        >
                            <div>
                                <ul className="header__list-item-popover-list">
                                    <li><Link to={'/'}>Popular People</Link></li>
                                </ul>
                            </div>
                        </EuiPopover>
                    </EuiHeaderLink>
                    <EuiHeaderLink className="header__list-item"
                        onMouseEnter={() => {
                            setMoreOpenPopover(true)
                        }}
                        onMouseLeave={() => {
                            setMoreOpenPopover(false)
                        }}>
                        <EuiPopover
                            className="header__list-item-popover"
                            button={
                                <EuiButtonEmpty
                                    className='header__list-item'
                                    isDisabled={false}
                                    color="#ffffff"
                                >
                                    More
                                </EuiButtonEmpty>}
                            isOpen={moreOpenPopover}
                        >
                            <div>
                                <ul className="header__list-item-popover-list">
                                    <li><Link to={'/'}>Discussions</Link></li>
                                    <li><Link to={'/'}>Leaderboard</Link></li>
                                    <li><Link to={'/'}>Support</Link></li>
                                    <li><Link to={'/'}>API</Link></li>
                                </ul>
                            </div>
                        </EuiPopover>
                    </EuiHeaderLink>
                </EuiHeaderLinks>,
            ],
        }, {
            items: [
                <EuiHeaderSectionItemButton className="header__plus-btn">
                    <EuiPopover
                        color="#ffffff"
                        button={
                            <EuiButtonEmpty
                                className='header__plus-btn-icon'
                                isDisabled={false}
                                color="#ffffff"
                                onClick={plusOpenPopoverFunc}
                            >
                                <Plus />
                            </EuiButtonEmpty>}
                        isOpen={plusOpenPopover}
                        closePopover={plusClosePopoverFunc}
                    >
                        <div>
                            <ul className="header__list-item-popover-list">
                                <li><Link to={'/'}>Add New Movie</Link></li>
                                <li><Link to={'/'}>Add New TV Show</Link></li>
                            </ul>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton className="header__language-btn"><Link to={'/'}>en</Link></EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton className="header__bell-btn">
                    <EuiPopover
                        color="#ffffff"
                        button={
                            <EuiButtonEmpty
                                className='header__plus-btn-icon'
                                isDisabled={false}
                                color="#ffffff"
                                onClick={bellOpenPopoverFunc}
                            >
                                <Bell />
                            </EuiButtonEmpty>}
                        isOpen={bellOpenPopover}
                        closePopover={bellClosePopoverFunc}
                    >
                        <div className="header__bell-btn-popover">
                            <h4 className="header__bell-btn-popover-title">Unread Notifications <span>0</span></h4>
                            <p className="header__bell-btn-popover-text">Good job! Looks like you're all caught up. <Link to={'/'}>View All</Link></p>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton aria-label="Account menu"
                    onMouseEnter={() => {
                        setProfileOpenPopover(true)
                    }}
                    onMouseLeave={() => {
                        setProfileOpenPopover(false)
                    }}>
                    <EuiPopover
                        button={
                            <EuiButtonEmpty
                                className='header__profile-btn-icon'
                                isDisabled={false}
                                onClick={bellOpenPopoverFunc}
                            >
                                <EuiAvatar name="Arsenii Vasylynchuk" size="s" />
                            </EuiButtonEmpty>}
                        isOpen={profileOpenPopover}
                    >
                        <div className="header__profile-btn-popover">
                            <p className="header__profile-btn-popover-text">Profile and Settings</p>
                        </div>
                    </EuiPopover>
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton className="header__search-btn"><Search /></EuiHeaderSectionItemButton>
            ],
        },]

    return (
        <header className="header">
            <EuiHeader className="header__block" theme="dark" sections={sections} css={cssStyles} />
            {/* <div className="header__logo">
                <Link to={}></Link>
                <img src="" alt="" />
            </div>
            <nav className="header__menu">
                <ul className="header__list-left">
                    <li><Link to={'/'}>Movies</Link></li>
                    <li><Link to={'/'}>TV Shows</Link></li>
                    <li><Link to={'/'}>People</Link></li>
                    <li><Link to={'/'}>More</Link></li>
                </ul>
                <ul className="header__list-right">
                    <li>
                        <Link to={'/'}><Plus /></Link>
                    </li>
                    <li>
                        <Link to={'/'}></Link>
                    </li>
                    <li>
                        <Link to={'/'}><Bell /></Link>
                    </li>
                    <li>
                        <Link to={'/'}></Link>
                    </li>
                    <li>
                        <Link to={'/'}></Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header