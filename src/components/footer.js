import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import FooterStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author,
                    link
                }
            }
        }
    `)

    return (
        <footer className={FooterStyles.footer}>
            <p>Created by <Link to={data.site.siteMetadata.link}>{data.site.siteMetadata.author}</Link>, &copy; 2020</p>
        </footer>
    )
}

export default Footer