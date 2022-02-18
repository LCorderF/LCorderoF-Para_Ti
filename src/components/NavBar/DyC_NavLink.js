import {NavLink as DyC_NavLink} from 'react-router-dom'

export const NavLink = ( {to, children, ...props}) => {
    return (
    <DyC_NavLink 
    {...props}
    className={({isActive}) => {
        return isActive ? 'nav-bar-enlace is-active' : 'nav-bar-enlace'
    }}
    to ={to}
    >{children}
    </DyC_NavLink>
    )
}
