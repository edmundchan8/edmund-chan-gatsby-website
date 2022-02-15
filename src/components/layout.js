import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
 } from './layout.module.css'

const Layout = ( { pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
        `)
    return (
        <div className={container}>
            <title>{ pageTitle} | { data.site.siteMetadata.title }</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/'>Home</Link></li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/about'>About</Link></li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/blog'>Blogs</Link></li>
                </ul>
            </nav>
            <h2 className={heading}>{ pageTitle }</h2>
            <p>{ children }</p>
        </div>
     )
}

export default Layout