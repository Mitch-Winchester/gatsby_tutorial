import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    body
 } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
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
        <div className={body}>
            <div className={container}>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                About
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/blog" className={navLinkText}>
                                Blog
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/recipes" className={navLinkText}>
                                Recipes
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/articles" className={navLinkText}>
                                Articles
                            </Link>
                        </li>
                    </ul>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/val_comp" className={navLinkText}>
                                Valheim Companion App
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout