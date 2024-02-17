import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EuiButtonEmpty, EuiHeaderLink, EuiPopover } from '@elastic/eui'

const NavItem = ({ popoverMenu, name, params }) => {
    const [openPopover, setOpenPopover] = useState(false)
    const closePopoverFunc = () => {setOpenPopover(false)}

    const onButtonClick = () => {setOpenPopover(prevValue => !prevValue)}

    return (
        <EuiHeaderLink>
            <EuiPopover
                className="header__list-item-popover"
                button={
                    <EuiButtonEmpty
                        className="header__list-item"
                        isDisabled={false}
                        style={params}
                        onClick={onButtonClick}
                    >
                        {name}
                    </EuiButtonEmpty>}
                isOpen={openPopover}
                closePopover={closePopoverFunc}
            >
                <ul className="header__list-item-popover-list">
                    {popoverMenu.map(el => (
                        <li key={el.id}><Link className='header__list-item-popover-list-link' to={el.path}>{el.name}</Link></li>
                    ))}
                </ul>
            </EuiPopover>
        </EuiHeaderLink>
    )
}

export default NavItem