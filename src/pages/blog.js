import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery (graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields:publishedDate,
                    order:DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
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
                {data.allContentfulBlogPost.edges.map((edge, index) => {
                    return (
                        <li key={index} className={BlogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage