import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

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
            <ol>
                {data.allMarkdownRemark.edges.map((edge, index) => {
                    return (
                        <li key={index}>
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