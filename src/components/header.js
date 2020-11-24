import React from 'react'
import { Link } from 'gatsby'

// import './header.module.scss'
import HeaderStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={HeaderStyles.header}>
            <h1>
                <Link className={HeaderStyles.title} to="/">
                    Nastya Codes
                </Link>
            </h1>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header