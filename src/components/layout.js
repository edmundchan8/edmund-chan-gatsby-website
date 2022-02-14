import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
 } from './layout.module.css'

const Layout = ( { pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{ pageTitle }</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/'>Home</Link></li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/about'>About</Link></li>
                </ul>
            </nav>
            <h2 className={heading}>{ pageTitle }</h2>
            <p>{ children }</p>
        </div>
     )
}

export default Layout