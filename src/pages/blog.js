import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery (graphql`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                    }
                    fields {
                        slug
                    }
                }
                }
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={BlogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge, index) => {
                    return (
                        <li key={index} className={BlogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage