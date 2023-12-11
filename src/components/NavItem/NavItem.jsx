import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EuiButtonEmpty, EuiHeaderLink, EuiPopover } from '@elastic/eui'

const NavItem = ({ popoverMenu, name, params }) => {

    const [openPopover, setOpenPopover] = useState(false)

    return (
        <EuiHeaderLink
            className="header__list-item"
            onMouseEnter={() => {
                setOpenPopover(true)
            }}
            onMouseLeave={() => {
                setOpenPopover(false)
            }}>
            <EuiPopover
                className="header__list-item-popover"
                button={
                    <EuiButtonEmpty
                        className="header__list-item"
                        isDisabled={false}
                        style={params}
                    >
                        {name}
                    </EuiButtonEmpty>}
                isOpen={openPopover}
            >
                <ul className="header__list-item-popover-list">
                    {popoverMenu.map(el => (
                        <li><Link to={el.path}>{el.name}</Link></li>
                    ))}
                </ul>
            </EuiPopover>
        </EuiHeaderLink>
    )
}

export default NavItem