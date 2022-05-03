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

const Layout = ( { pageTitle, loggedIn, children }) => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
        `)

    // let text = "This is some text from a const";
    // if (loggedIn){
    //     text = "The text has been changed";
    // }
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
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/news'>News Api</Link></li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/reddit'>Reddit Api</Link></li>

                </ul>
            </nav>
            <h2 className={heading}>{ pageTitle }</h2>
            {/* { text } */}
            <p>{ children }</p>
        </div>
     )
}

export default Layout